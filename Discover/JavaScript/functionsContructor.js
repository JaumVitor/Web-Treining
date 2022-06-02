// Definindo minha função contrutora
function Person(name, age, city) {
  // this- referencia aos atributos do meu objeto
  this.name = name
  this.age = age
  this.city = city

  this.working = () => {
    console.log(this.name + ' Esta trabalhando')
  }
}

// Criando instancias do meu objeto
let jhon = new Person('Jhon', 13, 'new york')
let ribamar = new Person('Ribamar', 22, 'Brazilian storm')
let jaum = new Person()

// console.log(jhon, ribamar)
// jhon.working()
// ribamar.working()

console.log(jaum)
// Testando outras funções contrutoras
// let data = new Date('2022-12-02')
// let number = new Number(1)

// console.log(data)

// Function factory retorna um objeto apartir dos argumentos passados
function functionFactory(name, age, city) {
  return {
    name: name,
    age: age,
    city: city
  }
}

// Não precisa do new, consequentmente não necessita da function contructor
let personObject = functionFactory('João', 15, 'January city')
console.log(personObject)
