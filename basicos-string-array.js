// Cree un array con todas las edades de los estudiantes de su clase. Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.
let edades = []
let edad = parseInt(window.prompt("Ingresar Edad"));

while(edad){
    edades.push(edad);
    edad = parseInt(window.prompt("Ingresar Edad"));
}

console.log(edades);

// Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while". Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese de que su solución funcione para cualquier array que se pase!
let edades = []
let edad = parseInt(window.prompt("Ingresar Edad"));

for(let i=0; edad; i++){
    if(edad%2 ==0){
        edades.push(edad);
    }
    edad = parseInt(window.prompt("Ingresar Edad"));
}
console.log(edades);


// Ejercicio 3: escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola. [3,6,2,6,8,1,0,9]

valorMenor = (array) => {
    array.sort((a,b) => a - b);
    console.log(array[0]); //ascendente
}
let array1 = new Array();
let input = parseInt(window.prompt("Ingresar Numero")); 

while(input){
    array1.push(input);
    input = parseInt(window.prompt("Ingresar Numero")); 
}
valorMenor(array1);

// Ejercicio 4: escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.

valorMayor = (array) => {
    array.sort((a,b) => b-a);
    console.log(array[0]); //ascendente
}
valorMayor(array1);

// Ejercicio 5: Escriba una función que reciba dos parámetros, una array y un índice. La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// var index = 1;

imprimirValorPosicion = (array, posicion) => array[posicion];
imprimirValorPosicion(array1,3);

// Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se repiten.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

imprimirValoresRepetidos = (array) =>{
    let arrayNuevo = new Array();
    valorMenor(array);

    //si aparece mas de una vez lo agrego al nuevo array
    for(let i=0; i<array.length; i++){
        if(array[i] == array[i+1]){
            arrayNuevo.push(array[i]);
        }
    }
    return arrayNuevo;
   
}

imprimirValoresRepetidos(array);

// Ejercicio 7: escriba una función de JavaScript simple para unir todos los elementos de la siguiente array en una cadena. 

unirStrings = (array) =>{
    let str = new String();
    for(let i=0; i< array.length; i++){
        str = str + " " + array[i].toString();
    }
    return str;
}

unirStrings(array)


// Ejercicio 8: escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.

invertir = (str) => str.split("").reverse().join("");
invertir("32443");

// Ejercicio 9: escriba una función de JavaScript que devuelva una cadena en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena.
ordenarAlfabeticamente = (str) => str.split("").sort().join("");
ordenarAlfabeticamente("webmaster");


// Ejercicio 10: escriba una función de JavaScript que busque la palabra más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo"

palabraMasGrande = (frase) =>{
    let array2 =  frase.split(" ");
    array2.sort((a,b) =>  b.length- a.length );
    return array2[0];
}
palabraMasGrande("Tutorial de desarrollo web");

