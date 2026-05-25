import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AreasRiscoService } from './areas-risco.service';
import { CriarAreaDto } from '../../dto/criar-area.dto';
import * as areaInterface from '../../interfaces/area.interface';

@Controller('areas-risco')
export class AreasRiscoController {
  constructor(private readonly areasRiscoService: AreasRiscoService) {}

  @Post()
  criar(@Body() criarAreasRiscoDto: CriarAreaDto) {
    return this.areasRiscoService.criar(criarAreasRiscoDto);
  }

  @Get()
  buscarTodos(): areaInterface.Area[] {
    return this.areasRiscoService.buscarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): areaInterface.Area {
    return this.areasRiscoService.buscarPorId(id);
  }
}
