import { Injectable } from '@nestjs/common';
import { Area } from './interface/area.interface';
import { CriarAreaDto } from './dto/criar-area.dto';

@Injectable()
export class AreasRiscoService {
  private areasRisco: Area[] = [];

  criar(criarAreaDto: CriarAreaDto): Area {
    const novaArea: Area = {
      id: (this.areasRisco.length + 1).toString(),
      ...criarAreaDto,
      createdAt: new Date(),
    };
    this.areasRisco.push(novaArea);
    return novaArea;
  }

  buscarTodos(): Area[] {
    return this.areasRisco;
  }

  buscarPorId(id: string): Area {
      const area = this.areasRisco.find((a) => a.id === id);
      if (!area) {
          throw new Error('Área de risco não encontrada');
      }
      return area;
  }
}
