// REST
const obj = {
  name: 'Alexander',
  age: 25,
  country: 'ES'
}

const { name, ...all } = obj
console.log(name, all)

const obj2 = {
  name: 'Alexander',
  age: 25
}

const obj3 = {
  ...obj2,
  country: 'ES'
}

console.log(obj3)

// PROMISE.FINALLY
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))

// REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
