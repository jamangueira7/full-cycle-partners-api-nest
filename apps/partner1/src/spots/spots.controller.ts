import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotsService } from './spots.service';
import { CreateSpotRequest } from './request/create-spot.request';
import { UpdateSpotRequest } from './request/update-spot.request';

@Controller('events/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
      @Body() createSpotDto: CreateSpotRequest,
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
      @Body() updateSpotDto: UpdateSpotRequest
  ) {
    console.log("fdsfdfasdfadfds")
    console.log(eventId, spotId, updateSpotDto)
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