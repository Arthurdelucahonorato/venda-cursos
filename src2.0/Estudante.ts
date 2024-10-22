import { Usuario } from './Usuario';
import { CursoComponente } from './composite/CursoComponente';

export class Estudante extends Usuario {
    constructor(id: number, nome: string, email: string, senha: string, saldo: number) {
        super(id, nome, email, senha, saldo);
    }

    // Estudante pode visualizar o curso
    visualizarCurso(curso: CursoComponente): void {
        console.log(`${this.nome} está visualizando o curso:`);
        curso.exibir();
    }

    // Estudante pode comprar o curso (herdado da classe Usuario)
}
