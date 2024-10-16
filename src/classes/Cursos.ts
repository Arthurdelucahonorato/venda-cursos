import { Video } from './Video';
import { Material } from './Material';

export class Curso {
    public videos: Video[] = [];
    public materiais: Material[] = [];

    constructor(
        public descricao: string,
        public conteudo: string,
        public avaliacao: number
    ) {}

    // Métodos para gerenciar vídeos
    cadastrarVideo(video: Video): void {
        this.videos.push(video);
        console.log(`Vídeo "${video.titulo}" adicionado ao curso.`);
    }

    excluirVideo(titulo: string): void {
        this.videos = this.videos.filter(video => video.titulo !== titulo);
        console.log(`Vídeo "${titulo}" removido do curso.`);
    }

    // Métodos para gerenciar materiais
    cadastrarMaterial(material: Material): void {
        this.materiais.push(material);
        console.log(`Material "${material.titulo}" adicionado ao curso.`);
    }

    excluirMaterial(titulo: string): void {
        this.materiais = this.materiais.filter(material => material.titulo !== titulo);
        console.log(`Material "${titulo}" removido do curso.`);
    }

    // Listar vídeos e materiais
    listarVideos(): Video[] {
        return this.videos;
    }

    listarMateriais(): Material[] {
        return this.materiais;
    }
}
