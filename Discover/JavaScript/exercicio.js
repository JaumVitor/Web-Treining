//1 - Declare uma varivel de um nome weight
let weight; 

console.log(weight); 

//2 - Que tipo de dado é a variavel
weight = {}; 
console.log(typeof weight); 

//3 - Declare variaveis e atribua valores a elas 
let name, number, stars, isSubscribed; 

name = "Fernando"; 
number = 10; 
stars = 1.2; 
isSubscribed = true; 

console.log(name); 
console.log(number); 
console.log(stars); 
console.log(isSubscribed); 

//4 - A variavel student abaixo é de que tipo de dado ? 
let student = {
    name: "Fernando", 
    age: 10, 
    weight: 1.2, 
    isSubscribed: true
}; 
 
//5
console.log(`O estudante ${student.name} tem ${student.age} anos e pesa ${student.weight} Kg`); 

//6 - Adicione o estudante no vetor
let students = []; 
students.push(student); 

console.log(students); 

//7 - Crie outro estudante e adicione no vetor
console.log('---------')
let student1 = new Object; //Criando outro objeto -> let student = {}

student1.name = "Rodrigo"; 
student1.age = "20"; 
student1.weight = 40.9; 
student1.isSubscribed = false; 

students.push(student1); 
console.log(students); 