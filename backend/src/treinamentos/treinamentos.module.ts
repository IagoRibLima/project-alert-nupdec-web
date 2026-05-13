import { Module } from '@nestjs/common';
import { TreinamentosService } from './treinamentos.service';
import { TreinamentosController } from './treinamentos.controller';

@Module({
  providers: [TreinamentosService],
  controllers: [TreinamentosController]
})
export class TreinamentosModule {}
