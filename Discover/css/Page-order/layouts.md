# Page layouts
- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## Posicionamento
O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

- Name: position
- Value: static | relative | absolute | fixed

## Relative
Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

## Absolute
Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento. Entretanto, caso eu queira que meu elemento seja absoluto dentro do "pai", preciso colocar a o valor **(position: relative)** dentro do mesmo. Caso contrario, ele sera absoluto no meu root.  

## Fixed
Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

## Element stacking
É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.