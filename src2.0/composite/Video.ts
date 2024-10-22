import { CursoComponente } from './CursoComponente';

export class Video implements CursoComponente {
    constructor(public nome: string, public titulo: string, public arquivo: string) {}

    exibir(): void {
        console.log(`Exibindo vídeo: ${this.titulo}`);
    }
}
