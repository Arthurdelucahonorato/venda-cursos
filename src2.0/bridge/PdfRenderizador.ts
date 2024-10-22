import { ConteudoCurso } from './ConteudoCurso';

export class PdfRenderizador implements ConteudoCurso {
    renderizar(): void {
        console.log('Renderizando material PDF...');
    }
}
