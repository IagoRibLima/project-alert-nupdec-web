import { Module } from '@nestjs/common';
import { DicasController } from './dicas.controller';
import { DicasService } from './dicas.service';

@Module({
  controllers: [DicasController],
  providers: [DicasService]
})
export class DicasModule {}
