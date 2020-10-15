# ECMAScript 6+

## Qué es ECMAScript

ECMAScript específicamente es el estándar que a partir del año 2015 a la actualidad se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, siendo este (JS – JavaScript) interpretado y procesado por multitud de plataformas, entre las que se encuentran los navegadores web, NodeJS u otros ambientes como el desarrollo de aplicaciones para los distintos sistemas operativos que actualmente existen en el mercado. Los responsables de dichos navegadores y JavaScript deben encargarse de interpretar el lenguaje tal como lo fija ECMAScript.

## ¿Es lo mismo ECMAScript y JavaScript?

No, Javascript no es exactamente equivalente a ECMAScript, las características principales de Javascript se basan en el estándar ECMAScript, pero Javascript también tiene otras características adicionales que no están en las especificaciones del estándar ECMA. Podemos decir que JavaScript es la implementación del estándar ECMAScript.

## Cómo funciona 

El [TC39](https://tc39.es/), es el comité que propone nuevas funcionalidades al stándar mediante un proceso que cuenta con 5 [stages](https://tc39.es/process-document/) por las que toda propuesta de nueva funcionalidad tiene que pasar hasta alcanzar el stage 4, que es el stage final. Adicionalmente las funcionalidades seleccionadas pasan, en la mayoría de los casos, a formar parte de la especificación ECMAScript seguida del nombre del año, ya que la nomenclatura de ECMAScript 5, ECMAScript 6, etc y que hemos usado durante años previos ya no volverá a ser usada.

## Evolución

## ECMAScript 6 (2015)

### Parámetros por defecto

Los parámetros por defecto *(default params)* son aquellos valores que se le envian a una función en caso de que al ser invocada no se le especifique algún parámetro.

→ Antes ES6

```jsx
function newFunction(name, age, country) {
	var name = name || 'Alex';
	var age = age || 26;
	var country = country || 'MX'
	console.log(name, age, country);
}
```

→ ES6

```jsx
function newFunction2(name = 'Alex', age = 26, country = 'MX') {
	console.log(name, age, country);
}
```

Como podemos ver el código se vuelve más simple y limpio.

### Template literals

Los template literals fueron introducidos también dentro del ES6 y es una forma más intuitiva de concatenar valores.

→ Antes ES6

```jsx
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world + '!';
```

→ ES6

```jsx
let epicPhrase2 = `${hello} ${world}!`;
```

### Multilinea

La multilinea es una caracteristica introducida en el ES como parte de las facilidades que traen los template literals.

→ Antes ES6

```jsx
let lorem = 'Lorem ipsum dolor sit amet. \n' + 'Praesentium, nesciunt!';
```

→ ES6

```jsx
let lorem2 = `Lorem ipsum dolor sit amet.
Praesentium, nesciunt!`
```

### Desestructuración de objetos

La desestructuración de objetos nos permite obtener los valores de los objetos de una forma más sencilla y sin utilizar la notación de punto.

→ Antes ES6

```jsx
let person = {
	'name': 'Alex',
	'age': 32,
	'country': 'MX'
}
console.log(person.name, person.age, person.country);
```

→ ES6

```jsx
let { name, age, country } = person;
console.log(name, age, country);
```

### Operador de propagación

Este operador, mejor conocido como *spread* fue introducido en el ES6 como nueva caracteristica. Nos permite 'expandir' varios elementos cuando por ejemplo tenemos elementos en arreglos y buscamos unirlos en uno solo.

→ ES6

```jsx
let team1 = ['Alex', 'Oscar', 'Manuel'];
let team2 = ['Valeria', 'Mariana', 'Camila'];
// ES6
let education = ['David', ...team1, ...team2];
console.log(education);
```

### Let y const

Let y const son dos formas nuevas de declarar variables y constantes, dejando de lado el uso de var. Donde let tiene un scope local y de bloque al igual que const que además actua como constate a la que no se le puede reasignar un valor.

→ ES6

```jsx
{ var globalVar = "Global Var"; }
{
	// ES6
	let globalLet = 'Global Let';
	console.log(globalLet);
}
console.log(globalVar);
// Const, cannot be reassigned
const HELLO = 'Hello World!';
```

### Objetos

Una de las caracteristicas de los objetos dentro del ES6 es la manera en que se simplifico la asignación de valores.

→ Antes ES6

```jsx
let name = 'Alex';
let age = 26;
obj = { 
	name: name, 
	age: age
};
```

→ ES6

```jsx
obj2 = { name, age };
```

### Funciones de flecha

Las funciones de flecha son una forma más elegante de escribir funciones anónimas.

→ Antes ES6

```jsx
const NAMES = [
	{name: 'Alex', age: 26},
	{name: 'Matty', age: 24}
]
let listOfNames = NAMES.map(function(item) {
	console.log(item.name);
});
```

→ ES6

```jsx
let listOfName2 = NAMES.map((item) => {
	console.log(item.age);
});
```

### Promesas

Las promesas fueron introducidas en el ES6 para mejorar el asincronismo en javascript y como una solución al *callback hell*.

→ ES6

```jsx
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey!');
		} else {
			reject('Ups!!');
		}
	});
}
helloPromise()
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	})
```

### Clases

Las clases vinieron a mejorar la sintaxis de los prototipos y es una forma que implementó javascript para poder manejar la herencia como hacen otros lenguajes.

→ ES6

```jsx
class calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}
	add(valueA, valueB) {
		this.valueA = valueA;
		this.valueB	= valueB;
		return this.valueA + this.valueB;
	}
}
const calc = new calculator();
console.log(calc.add(2,2));;
```

### Modulos

Los módulos nos permiten segmentar nuestro código en diferentes archivos y poderlos trabajar en conjunto, haciendo la lógica de nuestra aplicación más ordenada.

→ ES6

Archivo [module.js]

```jsx
const hello = () => {
	return 'Hello!';
}
export default hello;
```

Archivo [index.js]

```jsx
import { hello } from './module';
console.log(hello());
```

### Generadores

Los generadores llegaron a complementar a los iteradores ya que permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.

```jsx
function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}
	if (true) {
		yield 'World';
	}
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
```

## ECMAScript 7 (2016)

### Includes

El método includes nos ayuda a determinar si un array incluye un elemento determinado, nos retorna `true` o `false` dependiendo si lo encontró o no.

→ ES7

```jsx
let numbers = [1, 2, 3, 7, 8];
if (numbers.includes(7)) {
	console.log('Found Value');
} else {
	console.log('Not found');
}
```

### Potencia

→ ES7

Esta revisión de javascript incluyó un nuevo operador para realizar el cáclulo de una potencia.

```jsx
let base = 4;
let exponent = 4;
let result = base ** exponent
console.log(result);
```

## ECMAScript 8 (2017)

### Object entries

Esta caracteristica del ES8 nos permite devolver la clave y valores de un objeto en forma de matríz.

→ ES8

```jsx
const data = {
	frontend: 'Alex',
	backend: 'Samuel',
	design: 'Mariana'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
```

### Object values

A diferencia de la anterior, esta característica nos permite los valores del objeto en forma de arreglo.

→ ES8

```jsx
const data = {
	frontend: 'Alex',
	backend: 'Samuel',
	design: 'Mariana'
}
const values = Object.values(data);
console.log(values);
```

### Padding

El paddin en javascript nos permite añadir valores a una cadena de texto, ya sea al inicio al final de esta.

→ ES8

```jsx
const string = 'Hello';
let maxLength = 8;
let addStart = 'Hi ';
let addEnd = "!!!"
console.log(string.padStart(maxLength, addStart));
console.log(string.padEnd(maxLength, addEnd));
```

### Async Await

El async y await complementan el uso de las promesas.

→ ES8

```jsx
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true) 
			? setTimeout(() => resolve('Hello World!'), 3000)
			: reject(new Error('Test error'));
	});
};
const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
};
```

Esta característica incluye el correcto manejo de errores en las promesas, que sería haciendo uso del `try-catch`.

```jsx
const anotherFunction = async () => {
	try {
		const hello = await helloWorld();
		console.log(hello);
	} catch (err) {
		console.log(err);
	}
}
```

## ECMAScript 9 (2018)

### Operador de propagación

El operador *spread* recibió mejoras en el ES9 ahora nos permite utilizarlo dentro de los objetos.

→ ES9

```jsx
const obj = { name: 'Alex', age: 26, }
const obj1 = {
	...obj,
	country: 'MX',
}
console.log(obj1);
```

### Promise Finally

Se añade una nueva caracteristica a las promesas y es el `.finally` que se ejecuta cuando la promesa ya acabo su ejecución, sin importar si fue resuelta o no.

→ ES9

```jsx
// Promise finally
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
			? resolve('Hello World!')
			: reject(new Error('Test error'));
	});
};
helloWorld()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally(() => console.log('Promise end'));
```

### Match con Regex

Los regex nos permiten comprarar si una dato cumple con un patrón, en esta actualización del estándar se incluyó el método `.match` que nos permite obtener los valores de la cadena separando los elementos.

→ ES9

```jsx
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
```

## ECMAScript 10 (2019)

### Array flat

Esta característica nos permite volver un arreglo de N dimensiones de una sola.

→ ES10

```jsx
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
let depth = 2;
console.log(array.flat(depth));
```

### Array flatMap

FlatMap nos permite manipular los datos dentro del arreglo.

→ ES10

```jsx
let array = [1, 2, 3, 4, 5];
console.log(
	array.flatMap( value =>
		[value, value * 2]
	)
);
```

### Trim

El método `.trim` nos permite remover los espacios en blanco de una cadena de texto, en esta especificación del estandar se añadieron los métodos `.trimStart` y `.trimEnd` para manipular especificamente el inicio o fin de una cadena de texto.

→ ES10

```jsx
// trim start
let hello = '           hello world!';
console.log(hello);
console.log(hello.trimStart());
// trim end
let hello = 'hello world!           ';
console.log(hello);
console.log(hello.trimEnd());
```

### From Entries

Nos permite convertir arrays a un objeto. Es la caracteristica inversa de `entries`.

→ ES10

```jsx
let entries = [["name", "Alex"], ["age", 26]];
console.log(Object.fromEntries(entries));
```
