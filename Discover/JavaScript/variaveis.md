# Var

Escopo do var
Escopo, essencialmente, significa onde essas variáveis poderão ser utilizadas. Declarações com var tem escopo global ou escopo de função/local.

O escopo é global quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.

Para entender melhor, veja o exemplo abaixo.

```javascript
var greeter = 'hey hi'

function newFunction() {
  var hello = 'hello'
}
```

```javascript
var tester = 'hey hi'

function newFunction() {
  var hello = 'hello'
}
console.log(hello) // erro: hello não está definido
```

## Hoisting de var

Hoisting é um mecanismo do JavaScript que faz as declarações de variáveis e de funções sejam movidas para o topo de seu escopo antes da execução do código. Portanto, se fizermos isso:

```javascript
console.log(greeter)
var greeter = 'say hello'
```

```javascript
var greeter
console.log(greeter) // greeter is undefined
greeter = 'say hello'
```

Obs: Dessa forma não sofrem erro por não declaração.

## Problema com var

Há um ponto fraco no uso de var. Usarei o exemplo abaixo para explicar:

```javascript
var greeter = 'hey hi'
var times = 4

if (times > 3) {
  var greeter = 'say Hello instead'
}

console.log(greeter) // o resultado será "say Hello instead"
```

Se você já usou greeter em outras partes do seu código, pode se surpreender com o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. É por isso que let e const são necessários.

# Let

let tem escopo de bloco
Um bloco é uma porção de código cercado por {}. Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.

- Let pode ser atualizado, mas não declarado novamente.

- Porém, se a mesma variável for definida em escopos diferentes, não haverá
  erro:
  ```javascript
  let greeting = 'say Hi'
  if (true) {
    let greeting = 'say Hello instead'
    console.log(greeting) // retornará "say Hello instead"
  }
  console.log(greeting) // retornará "say Hi"
  ```

## Hoisting de let

Assim como as declarações com var, as feitas com let também sofrem o hoisting para o topo. Diferentemente de var, porém, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error.

# Const

Variáveis declaradas com const mantêm valores constantes. Declarações com const compartilham algumas semelhanças com as declarações com let.

## const não pode ser atualizado nem declarado novamente

Isso significa que o valor de uma variável declarada com const se mantém o mesmo dentro do escopo. Ela não pode ser atualizada nem declarada novamente. Desse modo, se declararmos uma variável com const, isso não será possível:

```javascript
const greeting = 'say Hi'
greeting = 'say Hello instead' // erro: atribuição a uma variável constante.
```

```javascript
const greeting = 'say Hi'
const greeting = 'say Hello instead' // erro: identificador 'greeting' já foi declarado
```

Esse comportamento é bastante diferente quando falamos de objetos declarados com const. Embora um objeto declarado com const não possa ser atualizado, é possível atualizar as propriedades desse **objeto**. Assim, podemos declarar um objeto com const dessa forma:

```javascript
const greeting = {
  message: 'say Hi',
  times: 4
}

//Isso não sera possivel:
greeting = {
  words: 'Hello',
  number: 'five'
} // erro:  atribuição a uma variável constante.

//Isso sera possivel:
greeting.message = 'say Hello instead'
```

## Hoisting de const

Assim como as declarações de let, as de const sofrem o hoisting para o topo do escopo, mas não são inicializadas.

# Resumo

- As declarações de **var** tem escopo global ou de função, enquanto as declarações de **let** e de **const** têm escopo de bloco.

- Variáveis de **var** podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de **let** podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de **const** não podem ser atualizadas nem declaradas novamente.

- Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com var são inicializadas com `undefined`, as variáveis com **let** e **const** não são inicializadas.

- Enquanto var e let podem ser declaradas sem ser inicializadas, const precisa da inicialização durante a declaração.

https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/#:~:text=As%20declara%C3%A7%C3%B5es%20de%20var%20tem,n%C3%A3o%20podem%20ser%20declaradas%20novamente.
