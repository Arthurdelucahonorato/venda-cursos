Trabalho Design Patterns 

Padrão Builder

O CursoBuilder é uma implementação do padrão de projeto Builder que facilita a criação de objetos da classe Curso de forma estruturada e incremental.
Ele encapsula o processo de construção de cursos, permitindo adicionar componentes como vídeos (Video) e materiais (Material) de maneira fluida e intuitiva.

Funcionalidades
 - Adição de componentes (Video, Material) ao curso de forma simples.
 - Métodos encadeados para construir e configurar o curso.
 - Isola a lógica de criação, mantendo o código limpo e reutilizável.

Com o CursoBuilder, você pode criar cursos complexos com múltiplos componentes sem expor a lógica de construção, tornando o código mais modular e fácil de manter.


------------------------------------------


Padrão Composite

Este projeto utiliza o padrão de projeto Composite para organizar e gerenciar componentes de um curso (como materiais, vídeos e outros cursos) em uma estrutura hierárquica.
O padrão permite tratar objetos compostos e individuais de forma uniforme, tornando o sistema flexível e extensível.


Estrutura

  - Interface CursoComponente: Define os métodos comuns para todos os componentes, como exibir, adicionarComponente, editarComponente e removerComponente.

Classes Concretas:

  - Curso: Representa um curso que pode conter outros componentes (inclusive outros cursos).

  - Material e Video: Representam componentes individuais, como materiais ou vídeos, que também podem ser exibidos.


Funcionalidades:

  - Permite criar estruturas hierárquicas de componentes (ex.: cursos que possuem subcursos, vídeos e materiais).

  - Oferece métodos uniformes para manipulação de componentes (adicionar, editar, remover e exibir).

  -Suporte a operações recursivas para exibição e gerenciamento de todos os componentes.


  ---------------------------------------------
  

  Padrão State

  




