import { Estudante } from '../src/classes/Estudante';
import { Professor } from '../src/classes/Professor';

const estudante = new Estudante(1, 'João', 'joao@email.com', '1234', 100, 'estudante');
const professor = new Professor(2, 'Maria', 'maria@email.com', '1234', 200, 'info professor', 'PhD', 'premium');

console.log('Testando Estudante:');
estudante.visualizarCurso();
estudante.comprarCurso();

console.log('Testando Professor:');
professor.visualizarCurso();
professor.cadastrarCurso();
