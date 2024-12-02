import { CursoBuilder } from './builder/CursoBuilder';
import { Professor } from './Professor';
import { Material } from './composite/Material';
import { Video } from './composite/Video';
import { Pagamento} from "./state/Pagamento";

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

console.log('\n=-=-= Criar Video =-=-=');
const videoPrincipal = new Video('Video Principal', 'Introdução ao TypeScript', 'video_principal.mp4');
const videoSub1 = new Video('Video Sub 1', 'Detalhes sobre Tipos', 'video_sub1.mp4');
const videoSub2 = new Video('Video Sub 2', 'Funções e Generics', 'video_sub2.mp4');

videoPrincipal.adicionarComponente(videoSub1);
videoPrincipal.adicionarComponente(videoSub2);

console.log('Estrutura inicial do vídeo:');
videoPrincipal.exibir();

console.log('\n=-=-= Editando Subcomponente =-=-=');
const videoEditado = new Video('Video Editado', 'Tipos em Profundidade', 'video_editado.mp4');
videoPrincipal.editarComponente(0, videoEditado);

// Exibindo estrutura após edição
console.log('Estrutura após editar o primeiro subcomponente:');
videoPrincipal.exibir();

console.log('\n=-=-= Removendo Subcomponente =-=-=');
videoPrincipal.removerComponente(1);

// Exibindo estrutura após remoção
console.log('Estrutura após remover o segundo subcomponente:');
videoPrincipal.exibir();


console.log('=-=-=-=-=-=-=')

// Professor visualizando curso
const professor = new Professor(1, 'John Doe', 'john@example.com', 'senha', 100, 'Informações do professor', 'Formação em TS', 'Assinatura Pro');
professor.visualizarCurso(curso);

console.log('=-=-=-=-=-=-=')

// Fazendo pagamento
const pedido = new Pagamento();

console.log("Realizando pagamento:");
pedido.pagar();

pedido.liberar();

console.log("Tentando cancelar o pedido pago:");
pedido.cancelar();

console.log("Tentar pagar novamente:");
try {
    pedido.pagar();
} catch (e) {
    console.error((e as Error).message);
}
