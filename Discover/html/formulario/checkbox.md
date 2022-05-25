# `<input:checkbox>` Value

O checkbox é uma caixa de seleção, cujo pode ser selecionado mais de um campo. Uma caixa de opção (Em que apenas um campo pode ser selecionado é feito usando `<input:radio>`).

O valor da caixa de seleção. Isso nunca é visto no lado do cliente, mas no servidor esse é o value atribuído aos dados enviados com o name da caixa de seleção. Tome o seguinte exemplo:

Neste exemplo, temos um nome subscribee um valor de newsletter. Quando o formulário é enviado, o par de nome / valor de dados será `subscribe=newsletter`.

Se o atributo value for omitido, o valor padrão da caixa de seleção é on , portanto, os dados enviados nesse caso seriam `subscribe=on`.
~~~css
<form>
  <div>
    <input type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter">
    <label for = "subscribeNews"> Subscreva a newsletter? </ label>
  </ div>
  <div>
    <button type = "submit"> Subscrever </ button>
  </ div>
</ form>
~~~

Neste exemplo, temos um nome subscribee um valor de newsletter. Quando o formulário é enviado, o par de nome / valor de dados será `subscribe=newsletter`.

Se o atributo value for omitido, o valor padrão da caixa de seleção é on , portanto, os dados enviados nesse caso seriam `subscribe=on`.

    Nota : Se uma caixa de seleção estiver desmarcada quando seu formulário for enviado, não haverá nenhum valor enviado ao servidor para representar seu estado desmarcado (por exemplo value=unchecked); o valor não é submetido ao servidor.
----
    OBS: Não é possivel usar o require no form, para obrigar o usuario a selecionar pelo menos um campo, antes de fazer o submit do form (com `<input:checkbox>`).

https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox