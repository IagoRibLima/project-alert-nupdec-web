import { IsString, IsNotEmpty } from 'class-validator';

export class CriarAlertaDto {
    @IsString()
    @IsNotEmpty()
    tipo!: string;

    @IsString()
    @IsNotEmpty()
    endereco!: string

    @IsString()
    @IsNotEmpty()
    descricao!: string;

    @IsString()
    @IsNotEmpty()
    imagemUrl!: string;

    @IsString()
    @IsNotEmpty()
    usuarioId!: string;
}