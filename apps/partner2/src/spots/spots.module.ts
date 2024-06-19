import { Module } from '@nestjs/common';
import { SpotsService } from './spots.service';
import { SpotsCoreModule} from "@app/core/spots/spots-core.module";

@Module({
  imports: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
