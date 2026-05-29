import { Module } from '@nestjs/common';
import { AreasRiscoService } from './areas-risco.service';
import { AreasRiscoController } from './areas-risco.controller';

@Module({
  controllers: [AreasRiscoController],
  providers: [AreasRiscoService],
})
export class AreasRiscoModule {}
