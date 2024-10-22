import { Usuario } from './Usuario';
import { Curso } from './composite/Curso';
import { CursoBuilder } from './builder/CursoBuilder';
import { CursoComponente } from './composite/CursoComponente';

export class Professor extends Usuario {
    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        saldo: number,
        public informacoes: string,
        public formacao: string,
        public assinatura: string
    ) {
        super(id, nome, email, senha, saldo);
    }

    // Professor pode visualizar o curso
    visualizarCurso(curso: CursoComponente): void {
        console.log(`${this.nome} está visualizando o curso:`);
        curso.exibir();
    }

    // Professor pode comprar o curso (herdado da classe Usuario)

    // Professor pode cadastrar um novo curso usando o Builder
    cadastrarCurso(descricao: string, conteudo: string): Curso {
        const cursoBuilder = new CursoBuilder(descricao, conteudo);
        const novoCurso = cursoBuilder.build();
        console.log(`${this.nome} cadastrou um novo curso: ${descricao}`);
        return novoCurso;
    }

    // Professor pode editar um curso (exemplo básico)
    editarCurso(curso: Curso, novaDescricao: string, novoConteudo: string): void {
        curso.descricao = novaDescricao;
        curso.conteudo = novoConteudo;
        console.log(`${this.nome} editou o curso para: ${novaDescricao}`);
    }
}
