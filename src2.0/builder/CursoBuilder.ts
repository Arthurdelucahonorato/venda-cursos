import { Curso } from '../composite/Curso';
import { Video } from '../composite/Video';
import { Material } from '../composite/Material';

export class CursoBuilder {
    private curso: Curso;

    constructor(descricao: string, conteudo: string) {
        this.curso = new Curso(descricao, conteudo);
    }

    adicionarVideo(titulo: string, nome: string, arquivo: string): CursoBuilder {
        const video = new Video(nome, titulo, arquivo);
        this.curso.adicionarComponente(video);
        return this;
    }

    adicionarMaterial(titulo: string, conteudo: string): CursoBuilder {
        const material = new Material(titulo, conteudo);
        this.curso.adicionarComponente(material);
        return this;
    }

    build(): Curso {
        return this.curso;
    }
}
