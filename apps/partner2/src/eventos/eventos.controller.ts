import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import { EventsService } from '@app/core/events/events.service';
import { CriarEventoRequest } from './request/criar-evento.request';
import { AlterarEventosRequest } from './request/alterar-eventos.request';
import {ReservarAssentoRequest} from "./request/reservar-assento.request";

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CriarEventoRequest) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: AlterarEventosRequest) {
    return this.eventsService.update(id, updateEventDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/reserve')
  reserveSpots(@Param('id') id: string,  @Body() dto: ReservarAssentoRequest) {
    return this.eventsService.reserveSpot(id, dto);
  }
}
