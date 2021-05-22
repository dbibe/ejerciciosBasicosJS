// ----------------------------JAVASCRIPT-----------------------------------

//Consola
console.log() 
console.info()
console.warn()
console.error()
console.clear() 

    //Ejemplo: 
    console.log("¡Hola a todos! Observen este número: ", 5 + 18);

//Script en línea -->  escrito directamente en el código HTML
{/* <script>
    console.log("¡Hola!");
</script> */}

//Script externo
    // <script src="js/index.js"></script>

    // Ubicación--> ¿Cómo descarga el archivo Javascript? --> Estado de la página
    // En <head>--> Antes de empezar a dibujar la página.--> Página aún no dibujada.
    // En <body> --> DURANTE el dibujado de la página.--> Dibujada hasta donde está la etiqueta <script>.
    // Antes de </body> --> DESPUÉS de dibujar la página.-->  Dibujada al 100%.

//-------------------Tipos de dato----------------------

Number
String
Boolean
undefined 
function
object
//--> para saber el tipo de dato--> 
    typeof()

    Si son objetos--> constructor.name
    console.log(s.constructor.name) //--> No funciona para los undefined 

//-------------------------------------Variables------------------------------

var
// Declarar variables mediante var se recomienda en fases de aprendizaje o en el caso de que se quiera mantener compatibilidad con navegadores muy antiguos utilizando ECMAScript 5, sin embargo, hay estrategias mejores a seguir que utilizar var en la actualidad


let
// Se introduce la palabra clave let en sustitución de var. Con ella, en lugar de utilizar los ámbitos globales y a nivel de función (var), utilizamos los ámbitos clásicos de programación: ámbito global y ámbito local.


// Vemos que utilizando let la variable p sólo existe dentro del bucle, ámbito local, mientras que utilizando var la variable p sigue existiendo fuera del bucle, ya que debe tener un ámbito global o a nivel de función.

const
// Se añade la palabra clave const, que inicializada con un valor concreto, permite crear variables con valores que no pueden ser cambiados


Object
// No es más que una variable especial que puede contener más variables en su interior

const objeto = new Object();

// Siempre que podamos, en Javascript se prefiere utilizar lo que se llaman los literales. Los literales de los objetos en Javascript son las llaves {}.

const objeto = {}; // Esto es un objeto vacío

const player = {
    name: "Manu",
    life: 99,
    strength: 10,
};

    //Estas variables dentro de los objetos se suelen denominar propiedades.
    // Acceso a sus propiedades
    // Una vez tengamos un objeto, podemos acceder a sus propiedades de dos formas diferentes: a través de la notación con puntos o a través de la notación con
    // corchetes.

    // Notación con puntos
    console.log(player.name); // Muestra "Manu"
    console.log(player.life); // Muestra 99
    // Notación con corchetes
    console.log(player["name"]); // Muestra "Manu"
    console.log(player["life"]); // Muestra 99


    //OBJECTS BASICS DE JS --> Tienen constantes y funciones propias
    
    1- Object Number
    2- Object Math



//---------------Operadores de JavaScript--------------------
   
    //Operadores Aritméticos
    // + Suma
    // - Resta
    // * Multiplicación
    // ** Exponenciación
    // / División
    // % Módulo: resto de dividir
    // ++ Incremento
    // -- Decremento

    //Operadores de comparacion
    // == //equal to
    // === //equal value and equal type
    // != //not equal
    // !== //not equal value or not equal type
    // > //greater than
    // < //less than
    // >= //greater than or equal to
    // <= //less than or equal to
    // ? //ternary operator

    //Operador lógicos
    // && //logical and
    // || //logical or
    // ! //logical not

    //Operador de tipo
    // typeof //Returns the type of a variable
    // instanceof //Returns true if an object is an instance of an object type


    //Operador Bit a Bit
    // & //AND 5 & 1 0101 & 0001 0001 1
    // | //OR 5 | 1 0101 | 0001 0101 5
    // ~ //NOT ~ 5 ~0101 1010 10
    // ^ //XOR 5 ^ 1 0101 ^ 0001 0100 4
    // << //Zero fill left shift 5 << 1 0101 << 1 1010 10
    // >> //Signed right shift 5 >> 1 0101 >> 1 0010 2
    // >>> //Zero fill right shift 


//------------------------------------ESTRUCTURAS IF---------------------------------------

    // If //Condición simple: Si ocurre algo, haz lo siguiente...
    // If-else //Condición con alternativa: Si ocurre algo, haz esto, sino, haz lo esto otro...
    // ? //Operador ternario: Equivalente a If/else, método abreviado.
    // Switch //Estructura para casos específicos: Similar a varios If/else anidados.


//------------------------------------BUCLES-----------------------------------------------

    // while //Bucles simples.
    // for //Bucles clásicos por excelencia.
    // do..while //Bucles simples que se realizan siempre como mínimo una vez.
    // for..in //Bucles sobre posiciones de un array. Los veremos más adelante.
    // for..of //Bucles sobre elementos de un array. Los veremos más adelante.
    // Array functions //Bucles específicos sobre arrays. Los veremos más adelante. --> https://lenguajejs.com/javascript/caracteristicas/array-functions/

//-------------------------FUNCIONES---------------------------------
//Toda función en JavaScript es un objeto Function.Una función siempre devuelve un valor, pero un procedimiento, puede o no puede devolver un valor.

    // function myFunc(elobjeto){
    // elobjeto.marca= "Toyota";
    // }

    // ([param] [, param]) => { instrucciones }

    // new Function (arg1, arg2, ... argN, functionBody)

    // var foo = function bar() {
    //     // el cuerpo va aquí
    // };

//----------------------------------------Constructor vs declaración vs expresión-------------------------

    //1)
    var multiply = new Function("x", "y", "return x * y;");
    
    //2) Una declaración de una función denominada multiply
        function multiply(x, y) {
        return x * y;
        }

    //3) Una expresión de función anónima asignada a la variable multiply
        var multiply = function(x, y) {
        return x * y;
        }
    
    //4) Una declaración de una función denominada func_name asignada a la variable multiply
        var multiply = function func_name(x, y) {
        return x * y;
        }
   
   
    // Todas hacen aproximadamente la misma cosa, con algunas diferencias sutiles:
    // Existe una distinción entre el nombre de la función y la variable a la que se asigna la
    // función:
    //     - El nombre de la función no se puede cambiar, mientras que la variable a la que se asigna la función puede ser reasignada.
    //     - El nombre de la función sólo se puede utilizar en el cuerpo de la función. Intentar utilizarlo fuera del cuerpo de la función da como resultado un error (o undefined si el nombre de la función se declaró previamente mediante una instrucción var). 
    
    //     Las funciones definidas por expresiones de función y declaraciones de función son analizadas una sola vez, mientras que las definidas por el constructor de Function no lo son. Es decir, la cadena de cuerpo de función pasada al constructor de Function debe ser analizada cada vez que se evalúa. 
    
    //     Aunque una expresión de función crea un cierre cada vez, el cuerpo de la función no es “parseado”, por lo que las expresiones de función son más rápidas que "new Function(...)". Por lo tanto, el constructor de la Function debe evitarse siempre que sea posible.
        
    //     Una declaración de función es muy fácilmente convertida en una expresión de función.
    //     Una declaración de función deja de ser una cuando:
    //         - Se convierte en parte de una expresión
    //         - Ya no es un "elemento fuente" de una función o el propio script. Un "elemento de origen" es una sentencia no anidada en el script o un cuerpo de función

//--------------------------------------------CALLBACK--------------------------------------
// Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}
   

//----------------------------------------------CLOSURE--------------------------------------
// Una clausura o closure es una función que guarda referencias del estado adyacente, o sea, permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada
function creaFunc() {
    var nombre = "internet";
    
    function muestraNombre() { //CLOSURE
        alert(nombre);
    }
    return muestraNombre;
   }

var miFunc = creaFunc();
miFunc();

// La solución a este rompecabezas es que miFunc se ha convertido en un closure. Un
// closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en 
// que se creó esa función. 

// El entorno está formado por las variables locales que estaban
// dentro del alcance en el momento que se creó el closure. En este caso, miFunc es un
// closure que incorpora tanto la función muestraNombre como el string "internet" que
// existían cuando se creó el closure


//----------------------------------------------SCOPE--------------------------------------
// Se refiere al contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está "en el Scope o alcance actual", entonces no está disponible para su uso.

//----------------------------------------------ARROW FUNCTIONS--------------------------------------
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

// Diferencias y limitaciones:
//     No tiene sus propios enlaces a this o super y no se debe usar como métodos.
//     No tiene argumentos o palabras clave new.target.
//     No apta para los métodos call, apply y bind, que generalmente se basan en establecer un
//     ámbito o alcance
//     No se puede utilizar como constructor.
//     No se puede utilizar yield dentro de su cuerpo


    //Comparación de funciones tradicionales con funciones flecha
        
        // Función tradicional  
        function (a){
            return a + 100;
        }

        //función flecha
        a => a + 100;
    
    //"this" y funciones flecha
        // Una de las razones por las que se introdujeron las funciones flecha fue para eliminar
        // complejidades del ámbito (this) y hacer que la ejecución de funciones sea mucho más
        // intuitiva.
        // This se refiere a la instancia. Las instancias se crean cuando se invoca la palabra clave
        // new. De lo contrario, this se establecerá —de forma predeterminada— en el ámbito o
        // alcance de window
    
    //call, apply y bind
        // Los métodos call, apply y bind NO son adecuados para las funciones flecha, ya que
        // fueron diseñados para permitir que los métodos se ejecuten dentro de diferentes ámbitos,
        // porque las funciones flecha establecen "this" según el ámbito dentro del cual se define la
        // función flecha



//----------------------------------------------ARRAYS--------------------------------------

let frutas = ["Manzana", "Banana"]

//Recorrer un Array
frutas.forEach(function(elemento, indice, array) {
 console.log(elemento, indice);
})
// Manzana 0
// Banana 1

//Añadir un elemento al final de un Array
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final

//Eliminar el último elemento de un Array
let ultimo = frutas.pop() // Elimina "Naranja" del final

//Añadir un elemento al principio de un Array
let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio

//Eliminar el primer elemento de un Array
let primero = frutas.shift() // Elimina "Fresa" del inicio

//Encontrar el índice de un elemento del Array
let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar

let elementoEliminado = frutas.splice(pos, 1)
//Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. Al hacer esto estaríamos modificando el array de origen.

let pos = 1, numElementos = 2
let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Coliflor", "Zapallo"] ==> Lo que se ha guardado en "elementosEliminados"

//Copiar un Array
let copiaArray = vegetales.slice();

//El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.
function esGrande(elemento, indice, arrreglo) {
 return elemento >= 10;
}

[12, 5, 8, 130, 44].every(esGrande); // false
[12, 54, 18, 130, 44].every(esGrande); // true

//Filter
//filter() no modifica el array sobre el cual es llamado.
function esGrande(elemento) {
    return elemento >= 10;
   }
   var filtrados = [12, 5, 8, 130, 44].filter(esGrande);
   // filtrados es [12, 130, 44]

//Some()
//some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false


    //Búsqueda, ordenación y comparación

        Array.isArray(obj) //Comprueba si obj es un array. Devuelve true o false.
        .includes(obj, from) //Comprueba si obj es uno de los elementos incluidos en el array.
        .indexOf(obj, from) //Devuelve la posición de la primera aparición de obj desde from.
        .lastIndexOf(obj,from) //Devuelve la posición de la última aparición de obj desde from.

        //Modificar
        copyWithin(pos, ini,end) //Devuelve array, copiando en pos los ítems desde ini a end.
        .fill(obj, ini, end) //Devuelve un array relleno de obj desde ini hasta end.

                //Ejemplo:
                array.copyWithin(5, 0, 1); // Devuelve ['a', 'b', 'c', 'd', 'e', 'a']
                array.copyWithin(3, 0, 3); // Devuelve ['a', 'b', 'c', 'a', 'b', 'c']
                array.fill("Z", 0, 5); // Devuelve ['Z', 'Z', 'Z', 'Z', 'Z', 'c']

        //Ordenaciones
        .reverse() //Invierte el orden de elementos del array.
        .sort() //Ordena los elementos del array bajo un criterio de ordenación alfabética.
        .sort(func) //Ordena los elementos del array bajo un criterio de ordenación func      
        

        //Arrays functions
        .forEach(cb, arg) //Realiza la operación definida en cb por cada elemento del array.
        .every(cb, arg) //Comprueba si todos los elementos del array cumplen la condición de cb.
        .some(cb, arg) //Comprueba si al menos un elem. del array cumple la condición de cb.
        .map(cb, arg) //Construye un array con lo que devuelve cb por cada elemento del array.
        .filter(cb, arg) //Construye un array con los elementos que cumplen el filtro de cb.
        .findIndex(cb, arg) //Devuelve la posición del elemento que cumple la condición de cb.
        .find(cb, arg) //Devuelve el elemento que cumple la condición de cb.
        .reduce(cb, arg) //Ejecuta cb con cada elemento (de izq a der), acumulando el resultado.
        .reduceRight(cb,arg) //idem al anterior, pero en orden de derecha a izquierda.

        //Iteradores

        i.keys() //Permite iterar un array e ir devolviendo sus índices o posiciones (keys).
        i.values() //Permite iterar un array e ir devolviendo sus valores (elementos).
        i.entries() //Permite iterar un array e ir devolviendo un array [índice, valor].

//----------------------------STRINGS--------------------------------------------------------

// Crear cadenas
// Las cadenas se pueden crear como primitivas, a partir de cadena literales o como objetos, Usando el constructor String():
    const string1 = "Una cadena primitiva";
    const string2 = 'También una cadena primitiva';
    const string3 = `Otra cadena primitiva más`;
    const string4 = new String("Un objeto String");

//Acceder a un caracter
//Hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método charAt():
return 'cat'.charAt(1) // devuelve "a"

//Comparar cadenas
//operadores menor que y mayor que

//Hay mas métodos-->googlear




