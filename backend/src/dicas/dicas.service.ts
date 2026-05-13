import { Injectable } from '@nestjs/common';
import { Dica } from './interface/dica.interface';
import { CriarDicaDto } from './dto/criar-dica.dto';

@Injectable()
export class DicasService {
    private dicas: Dica[] = [];

    criar(criarDicaDto: CriarDicaDto): Dica {
        const novaDica: Dica = {
            id: (this.dicas.length + 1).toString(),
            ...criarDicaDto,
            createdAt: new Date(),
        };
        this.dicas.push(novaDica);
        return novaDica;        
    }

    buscarTodos(): Dica[] {
        return this.dicas;
    }

    buscarPorId(id: string): Dica {
        const dica = this.dicas.find((d) => d.id === id);
        if (!dica) {
            throw new Error('Dica não encontrada');
        }
        return dica;
    }
}
