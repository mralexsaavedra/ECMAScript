import { hola } from './module'

// PARÁMETROS POR DEFECTO

// Antes
function newFunction (name, age, country) {
  var name = name || 'Alexander'
  var age = age || 25
  var country = country || 'ES'
  console.log(name, age, country)
}

// Ahora
function newFunction2 (name = 'Alexander', age = 25, country = 'ES') {
  console.log(name, age, country)
}

newFunction2() // esta cogerá los valores por defecto que hemos definido en la función
newFunction2('Aritz', 35, 'MX')

// CONCATENACIÓN

// Antes
const hello = 'Hello'
const world = 'World'
const epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// Ahora
const epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// MULTILÍNEA

// Antes
const lorem = 'Hola que tal \n' +
'otra linea'

// Ahora
const lorem2 = `Hola que tal
otra línea`

console.log(lorem)
console.log(lorem2)

// DESESTRUCTURACIÓN

// Antes
const person = {
  name: 'Alexander',
  age: 25,
  country: 'ES'
}

console.log(person.name, person.age)

// Ahora
const { name, age } = person
console.log(name, age)

// SPREAD
const team1 = ['Alexander', 'Oscar', 'Julian']
const team2 = ['Valeria', 'Jessica', 'Camila']

const education = ['David', ...team1, ...team2]

console.log(education)

// VAR
{
  var globalVar = 'Global var' // Desde cualquier punto es accesible y modificable
}
console.log(globalVar)

// LET
{
  const globalLet = 'Global let' // Sólo accesible en este bloque
  console.log(globalLet)
}
// console.log(globalLet) No está disponible

// CONST
const a = 'b'
// a = 'a' No se puede asignar un nuevo valor a una constante
console.log(a)

// PARÁMETROS EN OBJETOS

// Antes
const nombre = 'Alexander'
const edad = 32

const obj = { nombre: nombre, edad: edad }

// Ahora
const obj2 = { nombre, edad }

console.log(obj, obj2)

// ARROW FUNCTIONS

const names = [
  { name: 'Alexander', age: 25 },
  { name: 'Oscar', age: 32 }
]

// Antes
const listOfNames = names.map(function (item) {
  console.log(item.name)
})

// Ahora
const listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
  // ...
}

const listOfNames4 = name => {
  // ...
}

const square = num => num * num

// PROMESAS
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('👍🏽')
    } else {
      reject('👎🏽')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

// CLASES
class Calculator {
  constructor () {
    this.valueA = 0
    this.valueB = 0
  }

  sum (valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
console.log(calc.sum(2, 2))

// MÓDULOS
// el módulo está importado arriba del fichero
hola()

// GENERATORS
function * helloWorld () {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
