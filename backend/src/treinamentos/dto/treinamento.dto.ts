import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarTreinamentoDto {
    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsNotEmpty()
    @IsNumber()
    vagas!: number;

    @IsString()
    @IsNotEmpty()
    descricao!: string; 
}