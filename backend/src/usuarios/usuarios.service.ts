import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = []; 

  criar(criarUsuarioDto: CriarUsuarioDto): Usuario {    
    const usuarioExistente = this.usuarios.find(
      (u) => u.email === criarUsuarioDto.email,
    );
    if (usuarioExistente) {
      throw new ConflictException('E-mail já cadastrado');
    }
    
    const senha_hash = `hashed_${criarUsuarioDto.senha}`;

    const novoUsuario: Usuario = {
      id: uuidv4(), 
      ...criarUsuarioDto,
      senha_hash: senha_hash,
      adm: criarUsuarioDto.adm ?? false, 
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    delete (novoUsuario as any).senha; 

    this.usuarios.push(novoUsuario);
    return novoUsuario;
  }

  buscarTodos(): Usuario[] {
    return this.usuarios;
  }

  buscarPorId(id: string): Usuario {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  buscarPorEmail(email: string): Usuario | undefined {
    return this.usuarios.find((u) => u.email === email);
  }
}
