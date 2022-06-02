let controlFamily = {
  incomes: [10, 10, 25, 100, 200],
  expanses: [12, 10.9, 20.9, 50.3]
}

function administratorExpanses() {
  let incomes = 0,
    expanses = 0

  for (let propery in controlFamily) {
    for (let valueArray of controlFamily[propery]) {
      if (propery === 'incomes') {
        incomes += valueArray
      } else {
        expanses += valueArray
      }
    }
  }
  return (incomes - expanses).toFixed(2)
}

// console.log(administratorExpanses())

// Outra maneira de fazer o mesmo codigo
function sumArray(array) {
  let sum = 0
  for (element of array) {
    sum += element
  }
  return sum
}

function administratorExpanses1() {
  let incomes = 0,
    expanses = 0

  for (let atributeArray in controlFamily) {
    if (atributeArray === 'incomes') {
      incomes = sumArray(controlFamily[atributeArray])
    } else {
      expanses = sumArray(controlFamily[atributeArray])
    }
  }

  let total = incomes - expanses

  if (total < 0) {
    console.log('Saldo negativo')
  } else {
    console.log('Saldo positivo')
  }
  return total.toFixed(2)
}

console.log(administratorExpanses())
console.log(administratorExpanses1())
