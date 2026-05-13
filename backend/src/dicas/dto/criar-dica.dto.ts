import { IsNotEmpty, IsString } from "class-validator";

export class CriarDicaDto {
    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsString()
    @IsNotEmpty()
    descricao!: string;
}