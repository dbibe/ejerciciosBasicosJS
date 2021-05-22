// Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”
alert("Hello World");

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("Hello World"); //Escribe en la página

// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log(3+5);

// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
var user = window.prompt("Ingrese nombre usuario");
console.log(user);

// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
var number1 = parseInt(window.prompt("Ingrese Número"));
var number2 = parseInt(window.prompt("Ingrese otro número"));
console.log(number1+number2);

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var number1 = parseInt(window.prompt("Ingrese Número"));
var number2 = parseInt(window.prompt("Ingrese otro número"));

if(number1>number2){
    console.log(number1);
}else{
    console.log(number2);
}

// Escribe un programa que pida un número y diga si es divisible por 2

var number1 = parseInt(window.prompt("Ingrese Número"));

if(number1%2 == 0){
    console.log("Yes");
}else{
    console.log("No");
}

// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
var string = new String(window.prompt("Ingrese una frase"));
var contadorLetra = 0;

for(let i=0; i<=string.length;i++){
    if(string[i] == 'a'){
        contadorLetra++;
    } 
}
console.log(contadorLetra);

// Pide una nota (número). Muestra la calificación según la nota:
    // ● 0-3: Muy deficiente
    // ● 3-5: Insuficiente
    // ● 5-6: Suficiente
    // ● 6-7: Bien
    // ● 7-9: Notable
    // ● 9-10: Sobresaliente

var nota = parseFloat(window.prompt("Ingrese una nota"));

if(nota < 3){
    console.log("Muy Deficiente");
}else if(nota < 5 && nota >= 3){
    console.log("Insuficiente");
}else if(nota < 6 && nota >= 5){
    console.log("Suficiente");
}else if(nota < 7 && nota >= 6){
    console.log("Bien");
}else if(nota < 9 && nota >= 7){
    console.log("Notable");
}else{
    console.log("Sobresaliente");
}

// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

var str = window.prompt("Ingresar string");
var cadena = cadena + str;

while(str != "Cancelar"){
    cadena = cadena + "-" + str; 
    str = window.prompt("Ingresar string");
}

console.log(cadena);



// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento Nacional de Identidad).
    // El algoritmo para calcular la letra del dni es el siguiente :
    // ● El número debe ser entre 0 y 99999999
    // ● Debemos calcular el resto de la división entera entre el número y el número
    // 23.
    // ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
    // (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
    // ● Si lo introducido no es un número deberá indicarse con un alert y volver a
    // preguntar.
    // ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

var dni = parseInt(window.prompt("Ingresar un DNI"));

if(0<dni<99999999){
    var resultado = dni % 23
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
        
    console.log(letras[resultado]);

}else{
    console.error("DNI No compatible");
}

// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 
//  1
// 22
// 333
// 4444
// 55555
// 666666
// …….

for(let i=0; i < 30; i++){
    let str = new String(i);
    console.log(str.repeat(i));
}

// Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1

var numero = parseInt(window.prompt("Ingrese un numero"));
for(var i=numero; i > 0; i--){
    let str = new String(i);
    console.log(str.repeat(i));
}
