let text =
  'Tenho meu texto separado por espaçamentos e logo apos será substituido por underscor'
let array1 = text.split(' ')
let array2 = text.split(' ')

let phrase1
console.log(array1.join('-'))

let phrase2 = ''
array2.forEach(element => {
  phrase2 += element + '_'
})

console.log(phrase2)
