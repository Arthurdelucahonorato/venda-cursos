import { CursoComponente } from './CursoComponente';

export class Material implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public titulo: string, public conteudo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    exibir(nivel: number = 0): void {  // Adicionando valor padrão para 'nivel'
        let nive = 0
        console.log(`${' '.repeat(nivel * 2)}Material: ${this.titulo}`);
        this.componentes.forEach(componente => componente.exibir(nivel + 1)); // Passando o valor do nível incrementado
    }
}
