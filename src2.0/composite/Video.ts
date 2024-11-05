import { CursoComponente } from './CursoComponente';

export class Video implements CursoComponente {
    private componentes: CursoComponente[] = [];

    constructor(public nome: string, public titulo: string, public arquivo: string) {}

    adicionarComponente(componente: CursoComponente): void {
        this.componentes.push(componente);
    }

    exibir(nivel: number = 0): void {
        console.log(`${' '.repeat(nivel * 2)}Vídeo: ${this.titulo}`);
        this.componentes.forEach(componente => componente.exibir(nivel + 1)); // Incrementa o nível para subcomponentes
    }
}
