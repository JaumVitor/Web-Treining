
// Callback function
let func = funcName => {
  funcName() 
  console.log('Logo apos a chamada da função, que foi passada como arg')
}

// Estou passando a função como parametro de outra função
func(() => {
  console.log('Estou sendo passada como uma callback')
})

