import { Usuario } from './Usuario';
import { Curso } from './Cursos';
import { Video } from './Video';
import { Material } from './Material';

export class Professor extends Usuario {
    informacoes: string;
    formacao: string;
    assinatura: string;

    constructor(id: number, nome: string, email: string, senha: string, saldo: number, informacoes: string, formacao: string, assinatura: string) {
        super(id, nome, email, senha, saldo);
        this.informacoes = informacoes;
        this.formacao = formacao;
        this.assinatura = assinatura;
    }

    // O professor pode visualizar o curso
    visualizarCurso(curso: Curso): void {
        console.log(`${this.nome} está visualizando o curso: ${curso.descricao}`);
    }

    // O professor pode comprar o curso
    comprarCurso(curso: Curso): void {
        if (this.saldo >= 100) { // Suposição: Preço do curso é 100
            this.saldo -= 100;
            console.log(`${this.nome} comprou o curso: ${curso.descricao}`);
        } else {
            console.log(`${this.nome} não tem saldo suficiente para comprar o curso: ${curso.descricao}`);
        }
    }

    // O professor pode cadastrar um novo curso
    cadastrarCurso(descricao: string, conteudo: string, avaliacao: number): Curso {
        const novoCurso = new Curso(descricao, conteudo, avaliacao);
        console.log(`${this.nome} cadastrou o curso: ${novoCurso.descricao}`);
        return novoCurso;
    }

    // O professor pode adicionar vídeos ao curso
    adicionarVideo(curso: Curso, video: Video): void {
        curso.cadastrarVideo(video);
        console.log(`${this.nome} adicionou o vídeo "${video.titulo}" ao curso "${curso.descricao}".`);
    }

    // O professor pode adicionar materiais ao curso
    adicionarMaterial(curso: Curso, material: Material): void {
        curso.cadastrarMaterial(material);
        console.log(`${this.nome} adicionou o material "${material.titulo}" ao curso "${curso.descricao}".`);
    }
}
