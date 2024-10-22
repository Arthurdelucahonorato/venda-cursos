import { CursoComponente } from './CursoComponente';

export class Curso implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public descricao: string, public conteudo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    exibir(): void {
        console.log(`Curso: ${this.descricao}`);
        this.componentes.forEach(componente => componente.exibir());
    }
}
