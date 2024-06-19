import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarAssentoRequest } from './request/criar-assento.request';
import { AlterarAssentoRequest } from './request/alterar-assento.request';

@Controller('eventos/:eventId/assentos')
export class AssentosController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
      @Body() createSpotDto: CriarAssentoRequest,
      @Param('eventId') eventId: string
  ) {
    return this.spotsService.create(createSpotDto, eventId);
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(
      @Param('spotId') spotId: string,
      @Param('eventId') eventId: string
  ) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
      @Param('spotId') spotId: string,
      @Param('eventId') eventId: string,
      @Body() updateSpotDto: AlterarAssentoRequest
  ) {
    return this.spotsService.update(eventId, spotId, updateSpotDto);
  }

  @Delete(':spotId')
  remove(
      @Param('spotId') spotId: string,
      @Param('eventId') eventId: string
  ) {
    return this.spotsService.remove(eventId, spotId);
  }
}
