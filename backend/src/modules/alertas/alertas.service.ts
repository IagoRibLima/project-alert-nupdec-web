import { Injectable } from '@nestjs/common';
import { Alerta } from '../../interfaces/alerta.interface';
import { CriarAlertaDto } from '../../dto/criar-alerta.dto';

@Injectable()
export class AlertasService {
  private alertas: Alerta[] = [];
  
  criar(criarAlertaDto: CriarAlertaDto): Alerta {
    const novoAlerta: Alerta = {
      id: (this.alertas.length + 1).toString(),
      ...criarAlertaDto,
      createdAt: new Date(),
    };
    this.alertas.push(novoAlerta);
    return novoAlerta;
  }

  buscarTodos(): Alerta[] {
    return this.alertas;
  }

  buscarPorId(id: string): Alerta {
      const alerta = this.alertas.find((a) => a.id === id);
      if (!alerta) {
          throw new Error('Alerta não encontrado');
      }
      return alerta;
  }
}
