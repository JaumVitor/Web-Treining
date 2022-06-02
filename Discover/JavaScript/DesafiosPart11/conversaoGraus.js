/* Obs: slice é para strig (inicio, fim) - Não altera string
  splice é para array (inicio ate o fim ) - Remove elemento do array, e retorna elemento removido

  Outra maneira de fazer o mesmo codigo, é usando o includes()
  Caso contenha F ou C entra em uma condição
*/

function converterDegrees(degreeValue) {
  let indexLastElement = degreeValue.length - 1,
    degreeSign = '', //Sinal de graus
    degree = Number(degreeValue.slice(0, indexLastElement)) //Elemento sem o F ou C

  if (degreeValue.charAt(indexLastElement) === 'C') {
    // Formula que vai ser implemetada dependendo do sinal do grau (C -> F)
    formula = degree => degree * (9 / 5) + 32
    degreeSignAfterConvertion = 'F'
  } else if (degreeValue.charAt(indexLastElement) === 'F') {
    // (F -> C)
    formula = degree => (degree - 32) * (5 / 9)
    degreeSignAfterConvertion = 'C'
  }
  return formula(degree).toFixed(2) + degreeSignAfterConvertion
}

console.log(converterDegrees('32C'))
console.log(converterDegrees('90F'))
