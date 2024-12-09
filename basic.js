//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola " Bienvenida al bootcamp de FemCoders de Factoría F5" ymira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida al bootcamp de FemCoders de Factoría F5')


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí


// String: secuencia de caracteres con "" 

let names = "cuaderno"; 
console.log(names);

// Number: números enteros o decimales separados con un punto

let edad = 4.5;
console.log(edad);


// Boolean: verdadero o falso

let pregunta = true;
console.log(pregunta);

pregunta = false;
console.log(pregunta);

// Null: valor intencionalmente vacío

let nada = null;
console.log(nada);

// Undefined: sin valor asignado - no se asigna nada mas

let nadatambien = undefined;
console.log(nadatambien);

//Object (un objeto con propiedades y valores)

let lapicero = {
    color: "amarillo",
    tinta: "roja"
};
console.log(lapicero);
console.log(lapicero.color);


// array: una lista ordenada de tipos de datos

let listaCompra = [
    "frutas","verduras"
];
console.log(listaCompra);
console.log(listaCompra[0]);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = [
    "helado","tarta", "pastel"
];
console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "Paola",
    edad: 33
};
console.log(coder);



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí

console.log(typeof names);
console.log(typeof edad);
console.log(typeof pregunta);
console.log(typeof nada);
console.log(typeof nadatambien);
console.log(typeof lapicero);
console.log(typeof listaCompra);


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const suma = 3 + 5;
console.log(suma);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const resta = 45 - 23;
console.log(resta);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const multiplique = 3 * 3;
console.log(multiplique);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const divida = 3 / 3;
console.log(divida);


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let x = 1
let y = 2;

let resultado = x == y;
console.log(resultado);

// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí


let resultado2 = y != x;
console.log(resultado2);



//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2 = 20

let comparision = num1 != num2;                      //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log("Ejercicio 12: " + comparision);


//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = num3 === num3AsString;                        //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log("Ejercicio 13: " + result) 


//Ejercicio 14: completa el ejercicio

let result2 =  num3 == num3AsString;                                        //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log("Ejercicio 14: " + result2);


//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu
//nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "Paola";
let apellido = "Morales";
let nombreCompleto = nombre + " " + apellido;
console.log("Ejercicio 15: " + nombreCompleto);


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. 
//(Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
