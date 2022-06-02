// Funcao simplificada
function funcExt() {
  return {
    funcInt: function () {
      console.log('execultando função interna')
    }
  }
}

// Funcao não simplificada
function funcExt1() {
  var object = {
    funcInt1: function () {
      console.log('executando func interna 1')
    }
  }
  return object
}

funcExt().funcInt()
funcExt1().funcInt1()
