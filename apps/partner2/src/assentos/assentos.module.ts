import { Module } from '@nestjs/common';
import { AssentosController } from './assentos.controller';
import { SpotsCoreModule} from "@app/core/spots/spots-core.module";

@Module({
  imports: [SpotsCoreModule],
  controllers: [AssentosController],
})
export class AssentosModule {}
