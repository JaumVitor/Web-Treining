# `<Forms>`
- O atributo **action** define o local (uma URL) em que os dados recolhidos do formulário devem ser enviados.

- O atributo **method** define qual o método HTTP para enviar os dados (ele pode ser "GET" ou "POST"

## `<Fieldset>`
O elemento HTML `<fieldset>` é usado para agrupar elementos, assim como labels (`<label>`), dentro de um formulário web.

- Disabled 

    Se este atributo Booleano está definido, os controles de formulario que são seus descendentes, exceto os descendentes de seu primeiro elemento opcional `<legend>`, estarão desativados, i.e., não editável. Eles não receberão qualquer evento de navegação, como clique do mouse ou relacionado com focus. Frequentemente os navegadores mostram tais controles em cinza.

- Form  
    Este atributo tem o valor do atributo id do elemento `<form>` com que se relaciona. Seu valor padrão é o id  do elemento `<form>` mais próximo.

- Name  
    O nome associado com o grupo.

~~~css
    <form id="contato" action="" method="post">
        <label for="name">Sobrenome:</label>
        <input type="text" id="name">
    </form>

    /* Esse form vai ser externo, e vai referenciar pelo nome do id do form que vai ser referido.  */
    <fieldset disable form="contato">
        <legend>Legenda do meu grupo</legend>
        <label for="">name</label>
        <input type="text">
    </fieldset> -->

~~~

## `<Legend>`
O Elemento HTML `<legend>` (ou Elemento HTML Campo "Legend") representa um rótulo para o conteúdo do seu ancestral `<fieldset>`.
- Nome do agrupamento.
- Primeiro elemento do fieldset

~~~css
 <form action="" method="post">
        <fieldset name="nome_agrupamento">
            <legend>Legenda do meu grupo</legend>
            
            <label for="name">Sobrenome:</label>
            <input type="text" id="name">

        </fieldset>
    </form>
~~~

## `<input>`
- Autocomplet - Auto complemento baseados nos cokis.
- Autofocus - Ao foca um input.
- Disable
- Readonly (Quase todos)
- Value - Adiciona valor no input. 
- Form - Liga um input a um form. 
- Name - Usado no backend para identificar o input.
- Required (Quase todos) - Definir campo como obrigatorio no formulario.
- Placeholder (password, search, tel, text, url) - Auxilio do que escrever no campo. 