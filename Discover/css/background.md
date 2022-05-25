## Background
* Define um fundo para nosso elemento
* Sua área de atuação é a caixa toda
* Por padrão, é transparente

## Exemplos
* Usar cores solidas
* Usar imagens
* Controlar
    * a posição das imagens
    * se elas se repetem ou não
    * o tamanho delas na caixa
* Usar cor e imagem juntas
* Usar cor gradiente 

\
Para adicionar uma imagem como background podemos usar a propriedade background-image.

Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat.

~~~css
/* Values */
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    background-repeat: repeat;
    background-repeat: space;
    background-repeat: round;
    background-repeat: no-repeat;

    /* Podedmos usar 2 valores: horizontal | vertical */
    background-repeat: repeat space;
    background-repeat: repeat repeat;
    background-repeat: round space;
    background-repeat: no-repeat round;
~~~

Com a propriedade background-position podemos mudar a posição da imagem do background.

~~~css
    /* Pricipais valores */
    background-position: top;
    background-position: bottom;
    background-position: left;
    background-position: right;
    background-position: center;
~~~

\
*Para mudar o tamanho da imagem do background usamos a propriedade background-size:*

~~~css
    /* Values */
    background-size: cover;
    background-size: contain;

    /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
    background-size: 40% auto;
    background-size: 2em 25%;
    background-size: auto 8px;
    background-size: auto auto;
~~~

\
*A propriedade background-origin é quem define o ponto de origem de uma imagem específica.*

~~~css
/* Principais valores */
    background-origin: border-box;
    background-origin: padding-box;
    background-origin: content-box;
~~~

\
O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.
~~~css
/* Principais valores */
    background-clip: border-box;
    background-clip: padding-box;
    background-clip: content-box;
    background-clip: text;
~~~

\
*A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.*

~~~css
/* Principais valores */
    background-attachment: scroll;
    background-attachment: fixed;
    background-attachment: local;
~~~