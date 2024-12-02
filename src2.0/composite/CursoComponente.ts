export interface CursoComponente {
    exibir(nivel?: number): void;
    adicionarComponente?(componente: CursoComponente): void;
    editarComponente?(indice: number, novoComponente: CursoComponente): void;
    removerComponente?(indice: number): void;
}
