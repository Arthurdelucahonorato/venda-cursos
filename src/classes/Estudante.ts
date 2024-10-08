import { Usuario } from './Usuario';

export class Estudante extends Usuario {
    type: string;

    constructor(id: number, nome: string, email: string, senha: string, saldo: number, type: string) {
        super(id, nome, email, senha, saldo);
        this.type = type;
    }

    comprarCurso(): void {
        console.log(`${this.nome} está comprando um curso.`);
    }

    visualizarCurso(): void {
        console.log(`${this.nome} está visualizando um curso.`);
    }
}
