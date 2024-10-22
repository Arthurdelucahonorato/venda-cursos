import { CursoComponente } from './composite/CursoComponente'

export abstract class Usuario {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public senha: string,
        public saldo: number
    ) {}

    // Método para visualizar um curso (abstrato, deve ser implementado pelas subclasses)
    abstract visualizarCurso(curso: CursoComponente): void;

    // Método para comprar curso
    comprarCurso(curso: CursoComponente): void {
        const cursoPreco = 100; // Supondo que o preço de qualquer curso é 100
        if (this.saldo >= cursoPreco) {
            this.saldo -= cursoPreco;
            console.log(`${this.nome} comprou o curso: ${curso.exibir()}`);
        } else {
            console.log(`${this.nome} não tem saldo suficiente para comprar o curso: ${curso.exibir()}`);
        }
    }
}
