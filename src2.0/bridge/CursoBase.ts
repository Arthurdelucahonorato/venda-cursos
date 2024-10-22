import { ConteudoCurso } from './ConteudoCurso';

export class CursoBase {
    constructor(public descricao: string, public implementador: ConteudoCurso) {}

    exibirConteudo(): void {
        console.log(`Curso: ${this.descricao}`);
        this.implementador.renderizar();
    }
}
