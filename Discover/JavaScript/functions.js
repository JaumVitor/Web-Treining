// Testando functions
/*
let descriptionStatus = (description, outher) => {
  return [description, outher]
}

console.log(
  descriptionStatus('testando retorno', 'outro argumento').toString() + '----'
)
/*
/*
Embora o JavaScript não forneça suporte para funções que retornem vários valores, 
você pode agrupar valores em um array ou em um objeto para então retornar o array ou o objeto.

Use a sintaxe de atribuição de desestruturação para desempacotar valores do array ou propriedades do objeto.
*/

// Destruturação de objetos
let getName = () => {
  firtName = 'João'
  lastName = 'vitor'

  return { firtName, lastName }
}

let primeiroNome = getName().firtName
let ultimoNome = getName().lastName

console.log(primeiroNome, ultimoNome)


