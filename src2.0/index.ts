import { CursoBuilder } from './builder/CursoBuilder';
import { Professor } from './Professor';
import { VideoRenderizador } from './bridge/VideoRenderizador';
import { CursoBase } from './bridge/CursoBase';

// Usando o Builder para construir um curso
const cursoBuilder = new CursoBuilder('Curso de TypeScript', 'Aprenda TypeScript');
const curso = cursoBuilder
    .adicionarVideo('Introdução', 'Aula 1', 'video1.mp4')
    .adicionarVideo('CursoAvançado', 'Aula 1', 'video1.mp4')
    .adicionarMaterial('Capítulo 1', 'Conteúdo do capítulo 1')
    .adicionarMaterial('Capítulo 2', 'Conteúdo do capítulo 2, arthur 2')
    .build();

curso.exibir(); // Exibe os vídeos e materiais do curso

console.log('=-=-=-=-=-=-=')
// Usando Bridge para renderizar o curso
const cursoVideo = new CursoBase('Curso de Vídeo', new VideoRenderizador());
cursoVideo.exibirConteudo(); // Renderiza o curso como vídeo

// Professor visualizando curso
const professor = new Professor(1, 'John Doe', 'john@example.com', 'senha', 100, 'Informações do professor', 'Formação em TS', 'Assinatura Pro');
professor.visualizarCurso(curso);

console.log('AAAA to aqui')