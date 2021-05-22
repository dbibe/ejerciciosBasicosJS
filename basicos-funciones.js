// -----------------------------------Tema: Funciones---------------------------------------------
// Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”
function repetirFrase(numero){
    for(let i=0; i<numero; i++){
        console.log("Bienvenidos al curso Full Stack");
    }
}

a = (numero) =>{
    for(let i=0; i<numero; i++){
        console.log("Bienvenidos al curso Full Stack");
    }
} 


var numero = parseInt(window.prompt("Ingresar Numero"));
repetirFrase(numero);
//a(numero);

// Diseñar una función que tenga como parámetros dos números, y que calcule es el máximo.
maximo = (numero1,numero2)=>{
    if(numero1 > numero2){
        console.log(numero1);
    }else{
        console.log(numero2);
    }
}
let numero1 = parseInt(window.prompt("Ingresar Numero"));
let numero2 = parseInt(window.prompt("Ingresar Numero"));

maximo(numero1,numero2);


// Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.

promedio3 = (valor1,valor2,valor3) =>{
    let resultado = (valor1+valor2+valor3)/3;
    return resultado;
}

let numero1 = parseInt(window.prompt("Ingresar Numero"));
let numero2 = parseInt(window.prompt("Ingresar Numero"));
let numero3 = parseInt(window.prompt("Ingresar Numero"));

promedio3(numero1,numero2,numero3);


// Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función)
promedioNotas = ()=>{
    let contador = 0;
    let sum = 0;
    let numero = parseInt(window.prompt("Ingresar Numero"));

    if(numero ==-1){
        console.error("Se ingresó un -1");
    }
    
    while(numero > -1){
        contador = contador +1;
        sum = sum + numero;
        numero = parseInt(window.prompt("Ingresar Numero"));
    }

    return sum/contador;
}   

promedioNotas();


//Una función que se llame siguiente, que reciba como parámetro un valor entero, y devuelva el siguiente del número ingresado como parámetro
siguiente = (par1)=> par1+1;
numero = parseInt(window.prompt("Ingresar Numero"));
siguiente(numero);


// Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.

doble = (par1) => par1*2;
numero = parseInt(window.prompt("Ingresar Numero"));
doble(numero);

// Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del numero ingresado como parámetro elevado al cuadrado.

cuadrado = (par1) => par1*par1;
numero = parseInt(window.prompt("Ingresar Numero"));
cuadrado(numero);


// Una función que se denomine imprimirValores que dado un número por parámetro, imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.
imprimirValores = (par) =>{
    console.log("El valor siguiente es: ", siguiente(par));
    console.log("El valor doble es: ", doble(par));
    console.log("El valor del cuadrado es: ", cuadrado(par));
}

imprimirValores(2);

// Una función que se denomine imprimirElDobleDelSiguiente que dado un número por parámetro, imprima cual es el valor siguiente al el doble.
imprimirElDobleDelSiguiente = (par) =>{
    console.log(siguiente(doble(par)));
}
imprimirElDobleDelSiguiente(2);


//!!Testear callback
f1 = (funcion,par2) =>funcion(par2);
f1(doble,2);

// Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado
imprimirElDobleDelSiguienteAlCuadrado = (funcion1, funcion2, funcion3, par) => funcion1(funcion2(funcion3(par)));
imprimirElDobleDelSiguienteAlCuadrado(doble,siguiente,cuadrado,2);


// Una función que dado la longitud de un lado de un cuadrado devuelva el perímetro11. Una función que dado la longitud de un lado de un cuadrado devuelva la superficie.
areaCuadrado = (par) => cuadrado(par);
perimetroCuadrado = (par) => par*4;
let long = parseInt(window.prompt("Ingresar Longitud"));

areaCuadrado(long);
perimetroCuadrado(long);

// Una función que dado el radio de un círculo devuelva la circunferencia (perímetro del círculo).
// Una función que dado el radio de un círculo devuelva el área del círculo.
areaCirculo = (radio) => Math.PI * (radio*radio);
perimetroCirculo = (radio) => 2 * Math.PI * radio;


// Una función que dado un número de mes y me devuelva la cantidad de días de ese mes (suponiendo que no es un año bisiesto).
cantidadDeDias = (mes) =>{
    const meses30 = ["Enero", "Marzo","Mayo","Julio", "Agosto","Octubre","Diciembre"];
    const meses31 = ["Abril", "Junio", "Septiembre" , "Noviembre"];

    if(meses30.includes(mes)){
        console.log(30);
    }else if(meses31.includes(mes)){
        console.log(31);
    }else{
        console.log(28);
    }
}

cantidadDeDias("Febrero");


// Una función que reciba como parámetro un año y diga si ese año es bisiesto.
esBisiesto = (anio) => {
    if(anio > 2020){
        return (anio - 2020)%4 == 0;
    }else{
        return (2020-anio)%4 ==0;
    }
}

anio = parseInt(window.prompt());
esBisiesto(anio);
