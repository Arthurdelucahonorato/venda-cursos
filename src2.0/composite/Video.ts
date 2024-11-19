import { CursoComponente } from './CursoComponente';

export class Video implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public nome: string, public titulo: string, public arquivo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    editarComponente(indice: number, novoComponente: CursoComponente): void {
        if (indice >= 0 && indice < this.componentes.length) {
            this.componentes[indice] = novoComponente;
            console.log('Vídeo do vídeo editado com sucesso.');
        } else {
            console.error('Índice inválido.');
        }
    }

    removerComponente(indice: number): void {
        if (indice >= 0 && indice < this.componentes.length) {
            this.componentes.splice(indice, 1);
            console.log('Vídeo do vídeo removido com sucesso.');
        } else {
            console.error('Índice inválido.');
        }
    }

    exibir(nivel: number = 0): void {
        console.log(`${' '.repeat(nivel * 2)}Vídeo: ${this.titulo}`);
        this.componentes.forEach(componente => componente.exibir(nivel + 1)); // Incrementa o nível para subcomponentes
    }
}
