import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AlertasService } from './alertas.service';
import { Alerta } from './interfaces/alerta.interface';
import { CriarAlertaDto } from './dto/criar-alerta.dto';

@Controller('alertas')
export class AlertasController {
  constructor(private readonly alertasService: AlertasService) {}

  @Post()
  criar(@Body() criarAlertaDto: CriarAlertaDto) {
    return this.alertasService.criar(criarAlertaDto);
  }

  @Get()
  buscarTodos(): Alerta[] {
    return this.alertasService.buscarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): Alerta {
    return this.alertasService.buscarPorId(id);
  }
}
