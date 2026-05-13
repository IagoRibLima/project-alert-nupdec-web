import { Injectable } from '@nestjs/common';
import { Treinamento } from './interface/treinamento.interface';
import { CriarTreinamentoDto } from './dto/treinamento.dto';

@Injectable()
export class TreinamentosService {
    private treinamentos: Treinamento[] = [];

    criar(criarTreinamentoDto: CriarTreinamentoDto): Treinamento {
        const novoTreinamento: Treinamento = {
            id: (this.treinamentos.length + 1).toString(),
            ...criarTreinamentoDto,
            createdAt: new Date(),
        };
        this.treinamentos.push(novoTreinamento);
        return novoTreinamento;        
    }

    buscarTodos(): Treinamento[] {
        return this.treinamentos;
    }

    buscarPorId(id: string): Treinamento {
        const treinamento = this.treinamentos.find((t) => t.id === id);
        if (!treinamento) {
            throw new Error('Treinamento não encontrado');
        }
        return treinamento;
    }
}
