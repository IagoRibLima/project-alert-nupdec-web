export interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  senha_hash: string; 
  adm: boolean;
  unidadeId: string; 
  createdAt: Date;
  updatedAt: Date;
}