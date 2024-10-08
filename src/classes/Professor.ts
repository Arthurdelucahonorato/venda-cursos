import { Usuario } from './Usuario';

export class Professor extends Usuario {
    informacoes: string;
    formacao: string;
    assinatura: string;

    constructor(id: number, nome: string, email: string, senha: string, saldo: number, informacoes: string, formacao: string, assinatura: string) {
        super(id, nome, email, senha, saldo);
        this.informacoes = informacoes;
        this.formacao = formacao;
        this.assinatura = assinatura;
    }

    comprarCurso(): void {
        console.log(`${this.nome} está comprando um curso.`);
    }

    visualizarCurso(): void {
        console.log(`${this.nome} está visualizando um curso.`);
    }

    cadastrarCurso(): void {
        console.log(`${this.nome} está cadastrando um novo curso.`);
    }

    editarCurso(): void {
        console.log(`${this.nome} está editando um curso.`);
    }
}
