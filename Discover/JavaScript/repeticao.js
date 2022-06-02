let string = 'String'
let array = [1, 3, 4, 5, 5]

let Person = function (name = 'fulano', age = 10, weight = 20) {
  this.name = name
  this.age = age
  this.weight = weight

  // Sobreescrevendo toString do meu Person
  Person.prototype.toString = function () {
    return `${this.name}, ${this.age}, ${this.weight}`
  }
}

let person = new Person('richard', 13, 33.4)
let person1 = new Person()
let person2 = new Person('robert', 23, 60)

let arrayPerson = []
arrayPerson.push(person)
arrayPerson.push(person1)
arrayPerson.push(person2)

// for (let char of string){
//   console.log(char)
// }

// for (let num of array) {
//   console.log(num)
// }

// console.log(person)
// console.log(person1)

// Pecorrendo o array de objetos persons, e printando todos as propiedades deles
for (let objectPerson of arrayPerson) {
  for (propery in objectPerson) {
    if (propery !== 'toString') {
      console.log(objectPerson[propery])
    }
  }
  console.log('\n')
}

// Imprimindo valores do objeto pelo toString
console.log(person.toString())
console.log(person1.toString())
console.log(person2.toString())
