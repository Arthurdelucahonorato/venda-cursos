export interface CursoComponente {
    exibir(): void;
    adicionarComponente?(componente: CursoComponente): void; // Permitir a adição de subcomponentes
}
