// FLAT
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat(2))

// FLAT MAP
const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value * 2]))

// TRIM START
const hello = '    hello world'
console.log(hello)
console.log(hello.trimStart())

// TRIM END
const hello2 = 'hello world    '
console.log(hello2)
console.log(hello2.trimEnd())

// OPCIONAL ERROR CATCH
/* try {

} catch {
  error
} */

// FROM ENTRIES
const entries = [['name', 'alexander'], ['age', 32]]
console.log(Object.fromEntries(entries))

// OBJETO TIPO SYMBOL
const mySymbol = 'My symbol'
const symbol = Symbol(mySymbol)
console.log(symbol.description)
