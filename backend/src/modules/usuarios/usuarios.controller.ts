import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from '../../dto/criar-usuario.dto';
import * as usuarioInterface from '../../interfaces/usuario.interface';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criar(@Body() criarUsuarioDto: CriarUsuarioDto): usuarioInterface.Usuario {
    return this.usuariosService.criar(criarUsuarioDto);
  }

  @Get()
  buscarTodos(): usuarioInterface.Usuario[] {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): usuarioInterface.Usuario {
    const usuario = this.usuariosService.buscarPorId(id);
    if (!usuario) {
        throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }
}
