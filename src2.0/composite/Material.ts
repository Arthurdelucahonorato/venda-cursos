import { CursoComponente } from './CursoComponente';

export class Material implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public titulo: string, public conteudo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    editarComponente(indice: number, novoComponente: CursoComponente): void {
        if (indice >= 0 && indice < this.componentes.length) {
            this.componentes[indice] = novoComponente;
            console.log('Material editado com sucesso.');
        } else {
            console.error('Índice inválido.');
        }
    }

    removerComponente(indice: number): void {
        if (indice >= 0 && indice < this.componentes.length) {
            this.componentes.splice(indice, 1);
            console.log('Material removido com sucesso.');
        } else {
            console.error('Índice inválido.');
        }
    }

    exibir(nivel: number = 0): void {  // Adicionando valor padrão para 'nivel'
        console.log(`${' '.repeat(nivel * 2)}Material: ${this.titulo}`);
        this.componentes.forEach(componente => componente.exibir(nivel + 1)); // Passando o valor do nível incrementado
    }
}
