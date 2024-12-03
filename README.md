## Trabalho Design Patterns ##

Este projeto envolve a implementação de um sistema de gestão de cursos online utilizando padrões de design como Builder, Composite e State. <br> O objetivo é simular a experiência de compra, visualização e gestão de cursos por Estudantes e Professores, com controle de pagamento e estados do pedido.

### __Funcionalidades:__ ###


Usuários:

 - Estudantes: Podem comprar cursos, visualizar conteúdos e acompanhar seu status de pagamento.
 - Professores: Podem cadastrar novos cursos, adicionar ou editar conteúdos, e visualizar os cursos cadastrados.

   
Gestão de Pagamentos: <br> O pagamento de um curso passa por diversos estados, controlados pela classe `Pagamento`. O estado pode ser alterado dependendo das ações do usuário (pagar, liberar ou cancelar), e cada estado altera o comportamento do sistema conforme o contexto.


### __Benefícios e Objetivos:__ ###


 - Modularidade e Flexibilidade: O uso de padrões como o Composite e o Builder permite que o sistema seja altamente modular e extensível, facilitando a adição de novos tipos de conteúdo e funcionalidades. <br>
 - Gerenciamento de Estados de Pagamento: O padrão State garante que o comportamento do sistema seja adaptável ao estado atual do pagamento, melhorando a experiência do usuário e evitando transações inconsistentes. <br>
 - Este projeto é uma demonstração de como aplicar padrões de design em um sistema de gestão de cursos, oferecendo uma solução escalável, organizada e fácil de manter.

-----------------------------

### __Padrão Builder__ ### 

O `CursoBuilder` é uma implementação do padrão de projeto Builder que facilita a criação de objetos da classe `Curso` de forma estruturada e incremental.
Ele encapsula o processo de construção de cursos, permitindo adicionar componentes como vídeos (`Video`) e materiais (`Material`) de maneira fluida e intuitiva.

Funcionalidades
 - Adição de componentes (`Video`, `Material`) ao curso de forma simples.
 - Métodos encadeados para construir e configurar o curso.
 - Isola a lógica de criação, mantendo o código limpo e reutilizável.

Com o CursoBuilder, você pode criar cursos complexos com múltiplos componentes sem expor a lógica de construção, tornando o código mais modular e fácil de manter.


![Imagem de exemplo](https://github.com/Arthurdelucahonorato/venda-cursos/blob/main/UML%20Builder.jpeg)



------------------------------------------


### __Padrão Composite__ ### 

Este projeto utiliza o padrão de projeto Composite para organizar e gerenciar componentes de um curso (como materiais, vídeos e outros cursos) em uma estrutura hierárquica.
O padrão permite tratar objetos compostos e individuais de forma uniforme, tornando o sistema flexível e extensível.


Estrutura

  - __Interface `CursoComponent`__: Define os métodos comuns para todos os componentes, como `exibir`, `adicionarComponente`, `editarComponente` e `removerComponente`.

Classes Concretas:

  - __`Curso`__: Representa um curso que pode conter outros componentes (inclusive outros cursos). <br>
  - __`Material` e `Video`__: Representam componentes individuais, como materiais ou vídeos, que também podem ser exibidos.


Funcionalidades:

  - Permite criar estruturas hierárquicas de componentes (ex.: cursos que possuem subcursos, vídeos e materiais). <br>
  - Oferece métodos uniformes para manipulação de componentes (adicionar, editar, remover e exibir). <br>
  - Suporte a operações recursivas para exibição e gerenciamento de todos os componentes.


![Imagem de exemplo](https://github.com/Arthurdelucahonorato/venda-cursos/blob/main/UML%20Composite.jpeg)


  ---------------------------------------------
  

  ### __Padrão State__ ###


O padrão State é utilizado para gerenciar os diferentes estados de um pagamento no processo de compra de um curso.
A classe principal Pagamento mantém um estado atual e delega a responsabilidade de realizar ações como pagar, liberar e cancelar para o estado em que se encontra. 
Cada estado implementa esses métodos de forma específica, permitindo que o comportamento do pagamento varie conforme seu estado.


Como Funciona:

 - __Classe `Pagamento`__: Gerencia o estado atual do pagamento e delega as ações para o estado correspondente. <br>   
 - __Interface `Estado`__: Define os métodos que podem ser executados em cada estado (pagar, liberar, cancelar).


Estados:

 - __`AguardandoPagamento`__: O pagamento ainda não foi realizado. Pode aceitar o pagamento, liberar o curso ou cancelar. <br>   
 - __`Pago`__: O pagamento foi realizado. O curso pode ser liberado ou o pagamento pode ser cancelado. <br>   
 - __`Liberado`__: O curso foi liberado após o pagamento. Pode ser cancelado, mas não pode ser pago novamente. <br>   
 - __`Cancelado`__: O pagamento foi cancelado. Não é possível pagar ou liberar o curso.

   
Essa abordagem permite que o comportamento do pagamento seja alterado dinamicamente, dependendo do estado atual, garantindo uma lógica mais organizada e flexível.


![Imagem de exemplo](https://github.com/Arthurdelucahonorato/venda-cursos/blob/main/UML%20State.jpeg)




