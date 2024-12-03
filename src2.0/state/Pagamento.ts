// Enum para estados (opcional, para fácil referência)
export enum EstadoPedido {
  AGUARDANDO_PAGAMENTO = 1,
  PAGO,
  LIBERADO,
  CANCELADO,
}

// Interface para os estados
interface Estado {
  pagar(): void;
  liberar(): void;
  cancelar(): void;
}

// Contexto principal
export class Pagamento {
  private estadoAtual: Estado;

  constructor() {
    this.estadoAtual = new AguardandoPagamento(this);
  }

  setEstado(novoEstado: Estado) {
    this.estadoAtual = novoEstado;
  }

  pagar() {
    this.estadoAtual.pagar();
  }

  liberar() {
    this.estadoAtual.liberar();
  }

  cancelar() {
    this.estadoAtual.cancelar();
  }
}

// Estado: Aguardando Pagamento
class AguardandoPagamento implements Estado {
  constructor(private pagamento: Pagamento) {}

  pagar() {
    console.log("Pagamento realizado com sucesso.");
    this.pagamento.setEstado(new Pago(this.pagamento));
  }

  liberar() {
    console.log("Aguardando pagamento para liberação do curso.");
  }

  cancelar() {
    console.log("Pagamento cancelado.");
    this.pagamento.setEstado(new Cancelado(this.pagamento));
  }
}

// Estado: Pago
class Pago implements Estado {
  constructor(private pagamento: Pagamento) {}

  pagar() {
    throw new Error("O curso já foi pago.");
  }

  liberar() {
    console.log("Curso liberado para visualização! Bons estudos");
    this.pagamento.setEstado(new Liberado(this.pagamento));
  }

  cancelar() {
    console.log("Compra do curso cancelado. Pagamento será reembolsado.");
    this.pagamento.setEstado(new Cancelado(this.pagamento));
  }
}

// Estado: Liberado
class Liberado implements Estado {
  constructor(private pagamento: Pagamento) {}
  
  pagar() {
    throw new Error("O curso já foi pago e está liberado para acesso.");
  }

  liberar() {
    console.log("Curso liberado para visualização! Bons estudos");
  }

  cancelar() {
    console.log("Compra cancelada e liberação removida. Pagamento será reembolsado.");
    this.pagamento.setEstado(new Cancelado(this.pagamento));
  }
}

// Estado: Cancelado
class Cancelado implements Estado {
  constructor(private pagamento: Pagamento) {}

  pagar() {
    throw new Error("O pedido foi cancelado e não pode ser pago.");
  }

  liberar() {
    console.log("Pagamento foi cancelado, curso está bloqueado!");
  }

  cancelar() {
    throw new Error("O pedido já está cancelado.");
  }
}
