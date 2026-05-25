import { IsEmail, IsString, IsBoolean, IsNotEmpty, Length } from 'class-validator';

export class CriarUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CPF deve ter 11 dígitos' })
  cpf!: string;

  @IsString()
  telefone!: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres' })
  senha!: string; 

  @IsBoolean()
  adm?: boolean; 

  @IsString()
  @IsNotEmpty()
  unidadeId!: string;
}