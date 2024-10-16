export class Certificacao {
    constructor(
        public titulo: string,
        public texto: string,
        public nomeUsuario: string,
        public dataConclusao: Date,
        public assinatura: string
    ) {}

    method(type: string): any {
        // Implementação do método genérico
    }
}
