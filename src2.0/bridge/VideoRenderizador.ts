import { ConteudoCurso } from './ConteudoCurso';

export class VideoRenderizador implements ConteudoCurso {
    renderizar(): void {
        console.log('Renderizando vídeo...');
    }
}
