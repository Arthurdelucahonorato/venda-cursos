import { Usuario } from './Usuario';
import { Curso } from './Cursos';

export class Estudante extends Usuario {
    type: string;

    constructor(id: number, nome: string, email: string, senha: string, saldo: number, type: string) {
        super(id, nome, email, senha, saldo);
        this.type = type;
    }

    visualizarCurso(curso: Curso): void {
        console.log(`${this.nome} está visualizando o curso: ${curso.descricao}`);
    }

    // O estudante pode comprar o curso
    comprarCurso(curso: Curso): void {
        if (this.saldo >= 100) { // Vamos supor que o preço do curso seja 100
            this.saldo -= 100;
            console.log(`${this.nome} comprou o curso: ${curso.descricao}`);
        } else {
            console.log(`${this.nome} não tem saldo suficiente para comprar o curso: ${curso.descricao}`);
        }
    }
}
