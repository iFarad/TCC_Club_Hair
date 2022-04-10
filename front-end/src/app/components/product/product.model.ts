export interface Product {
    id?: number
    email: string;
    telefone: string;
    nome: string;
    sobrenome: string;
    cpf: string;
    rg: string;
    orgaoEmissor: string;
    servicos: Array<Servico>
}

export class Servico {
    nome: string;
    tempo: number;
    valor: number;

}