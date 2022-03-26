export class barbearia {
    email: string;
    telefone: string;
    nome: string;
    sobrenome: string;
    cpf: string;
    rg: string;
    orgaoEmissor: string;
    servicos: Array<servico>
}

export class servico {
    nome: string;
    tempo: number;
    valor: number;

}


