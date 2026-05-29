import { IsString, IsNotEmpty, Length } from "class-validator";

export class CriarAreaDto {
    @IsString()
    @IsNotEmpty()
    rua!: string;
    
    @IsString()
    @IsNotEmpty()
    bairro!: string
    
    @IsString()
    @IsNotEmpty()
    @Length(8, 8, { message: 'CEP deve ter 8 dígitos' })
    cep!: string;
}