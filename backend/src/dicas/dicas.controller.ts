import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CriarDicaDto } from './dto/criar-dica.dto';
import { DicasService } from './dicas.service';
import { Dica } from './interface/dica.interface';

@Controller('dicas')
export class DicasController {
    constructor(private readonly dicaService: DicasService) {}

    @Post()
    criar(@Body() criarDicaDto: CriarDicaDto) {
        return this.dicaService.criar(criarDicaDto);
    }

    @Get()
    buscarTodos(): Dica[] {
        return this.dicaService.buscarTodos();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string): Dica {
        return this.dicaService.buscarPorId(id);
    }
}
