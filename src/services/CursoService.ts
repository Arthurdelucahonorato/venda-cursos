import { Curso } from '../classes/Cursos';

export class CursoService {
    cursos: Curso[] = [];

    adicionarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    listarCursos(): Curso[] {
        return this.cursos;
    }

    // Outros serviços relacionados a cursos
}
