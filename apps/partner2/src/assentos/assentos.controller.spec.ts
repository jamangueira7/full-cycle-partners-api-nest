import { Test, TestingModule } from '@nestjs/testing';
import { AssentosController } from './assentos.controller';
import { SpotsService } from '@app/core/spots/spots.service';

describe('AssentosController', () => {
  let controller: AssentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssentosController],
      providers: [SpotsService],
    }).compile();

    controller = module.get<AssentosController>(AssentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
