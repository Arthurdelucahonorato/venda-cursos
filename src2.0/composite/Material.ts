import { CursoComponente } from './CursoComponente';

export class Material implements CursoComponente {
    constructor(public titulo: string, public conteudo: string) {}

    exibir(): void {
        console.log(`Exibindo material: ${this.titulo}`);
    }
}
