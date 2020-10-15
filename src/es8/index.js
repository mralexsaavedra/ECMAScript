// OBJECT.ENTRIES
const data = {
  frontend: 'Alexander',
  backend: 'Oscar',
  design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// OBJECT.VALUES
const data2 = {
  frontend: 'Alexander',
  backend: 'Oscar',
  design: 'Ana'
}

const values = Object.values(data2)
console.log(values)
console.log(values.length)

// PADDING
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ----'))
console.log('food'.padEnd(12, ' ----'))

// COMAS
/* const a = {
  hello: 'hello', <-- (coma)
} */

// ASYNC/AWAIT
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World!'), 3000)
      : reject(new Error('Test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()
