import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from "../prisma/prisma.service";
import {ReserveSpotDto} from "./dto/reserve-spot.dto";
import {Prisma, SpotStatus, TicketStatus} from "@prisma/client";

@Injectable()
export class EventsService {

  constructor(private prismaService: PrismaService) {}
  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: {
        ...createEventDto,
        date: new Date(createEventDto.date),
      },
    });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: { id: id },
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    if (updateEventDto.date) {
      updateEventDto.date = new Date(updateEventDto.date);
    }

    return this.prismaService.event.update({
      data: {
        ...updateEventDto,
      },
      where: { id: id },
    });
  }

  remove(id: string) {
    return this.prismaService.event.delete({
      where: { id: id },
    });
  }

  async reserveSpot(eventId: string, dto:ReserveSpotDto) {
    const spots = await this.prismaService.spot.findMany({
      where: {
        eventId,
        name: {
          in: dto.spots
        },
      },
    });

    if (spots.length !== dto.spots.length) {
      const foundSpotsName = spots.map((spot) => spot.name);
      const notFoundSpotsName = dto.spots.filter(
          (spotName) => !foundSpotsName.includes(spotName),
      );

      throw new Error(`Lugares ${notFoundSpotsName.join(', ')} não encontrados.`)
    }

    try {
      const tickets = await this.prismaService.$transaction(async (prisma) => {
        await prisma.reservationHistory.createMany({
          data: spots.map((spot) => ({
            spotId: spot.id,
            ticketKind: dto.ticket_kind,
            email: dto.email,
            status: TicketStatus.reserved,
          })),
        });

        await prisma.spot.updateMany({
          where: {
            id: {
              in: spots.map((spot) => spot.id),
            },
          },
          data: {
            status: SpotStatus.reserved
          }
        });

        const tickets = await Promise.all(
            spots.map((spot) => prisma.ticket.create({
              data: {
                spotId: spot.id,
                ticketKind: dto.ticket_kind,
                email: dto.email,
              },
            }))
        );

        return tickets;
      }, {isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted});

      return tickets;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code) {
          case 'P2002':
          case 'P2034':
            throw new Error('Lugar ja foi reservado.');
        }
      }

      throw e;
    }
  }
}
