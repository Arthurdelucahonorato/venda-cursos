import { Usuario } from './Usuario';
import { Curso } from './Cursos';

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

    // O professor pode visualizar o curso
    visualizarCurso(curso: Curso): void {
        console.log(`${this.nome} está visualizando o curso: ${curso.descricao}`);
    }

    // O professor pode comprar o curso
    comprarCurso(curso: Curso): void {
        if (this.saldo >= 100) { // Suposição: Preço do curso é 100
            this.saldo -= 100;
            console.log(`${this.nome} comprou o curso: ${curso.descricao}`);
        } else {
            console.log(`${this.nome} não tem saldo suficiente para comprar o curso: ${curso.descricao}`);
        }
    }

    cadastrarCurso(): void {
        console.log(`${this.nome} está cadastrando um novo curso.`);
    }

    editarCurso(): void {
        console.log(`${this.nome} está editando um curso.`);
    }
}
