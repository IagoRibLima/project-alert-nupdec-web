import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TreinamentosService } from './treinamentos.service';
import { CriarTreinamentoDto } from './dto/treinamento.dto';

@Controller('treinamentos')
export class TreinamentosController {
    constructor(private readonly treinamentosService: TreinamentosService) {}

    @Post()
    criar(@Body() criarTreinamentoDto: CriarTreinamentoDto) {
        return this.treinamentosService.criar(criarTreinamentoDto);
    }

    @Get()
    buscarTodos() {
        return this.treinamentosService.buscarTodos();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string) {
        return this.treinamentosService.buscarPorId(id);
    }
}
