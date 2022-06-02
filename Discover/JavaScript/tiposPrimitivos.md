# Tipos primitivos

Eles só podem armazenar um único dado, não têm métodos e são imutáveis.

```javascript
// A gente nao pode modificar a string
let car = 'car'
console.log(car) // car
car.toUpperCase()
console.log(car) // car
car[0] = 'b'
console.log(car) // car

// Mas podemos atribuir um novo valor à mesma variável
car = car.toUpperCase()
console.log(car) // CAR
```

- A variável pode ser reatribuída a um novo valor, mas o valor primitivo existente não pode ser alterado como fazemos com arrays ou objetos.

- Javascript converte automaticamente os primitivos em seus objetos correspondentes quando um método for invocado. Javascript envolve o primitivo e chama o método.
