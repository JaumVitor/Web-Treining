let sayMyName = function (name) {
  if (name === undefined) {
    throw "Error, value 'name' is not defined"
  }
  console.log('Hello my name is ' + name)
}

try {
  sayMyName('jaum')
  sayMyName()
} catch (exception) {
  console.log(exception)
}
