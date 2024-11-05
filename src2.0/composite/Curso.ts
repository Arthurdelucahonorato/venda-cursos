import { CursoComponente } from './CursoComponente';

export class Curso implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public descricao: string, public conteudo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    exibir(nivel: number = 0): void {  // Adicionando valor padrão para 'nivel'
        console.log(`${' '.repeat(nivel * 2)}Curso: ${this.descricao}`);
        this.componentes.forEach(componente => componente.exibir(nivel + 1)); // Passando o valor do nível incrementado
    }
}
