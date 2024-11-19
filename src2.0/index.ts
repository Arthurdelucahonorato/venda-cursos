import { CursoBuilder } from './builder/CursoBuilder';
import { Professor } from './Professor';
import { Material } from './composite/Material';
import { Video } from './composite/Video';

// Usando o Builder para construir um curso
const cursoBuilder = new CursoBuilder('Curso de TypeScript', 'Aprenda TypeScript');
const curso = cursoBuilder
    .adicionarVideo('Introdução', 'Aula 1', 'video1.mp4')
    .adicionarMaterial('Capítulo 1', 'Conteúdo do capítulo 1')
    .build();

// Adicionando subcomponentes dentro de materiais e vídeos
const materialSub = new Material('Capítulo 2', 'Conteúdo do capítulo 2');
materialSub.adicionarComponente(new Video('Aula 2', 'Curso Avançado', 'video2.mp4'));
curso.adicionarComponente(materialSub);

// Exibindo o curso com todos os componentes e subcomponentes
curso.exibir(); // Exibe a árvore completa do curso

console.log('=-=-=-=-=-=-=')

// Professor visualizando curso
const professor = new Professor(1, 'John Doe', 'john@example.com', 'senha', 100, 'Informações do professor', 'Formação em TS', 'Assinatura Pro');
professor.visualizarCurso(curso);

console.log('AAAA to aqui');