var texto = "Hola"
var numero = 5;
var flotante = 4.5;
var booleano = true;
var nulo = null;
var indefinido;

//Casting = convertir de un tipo de dato a otro
var cambio = String(numero);
//console.log(numero,cambio, typeof(numero), typeof(cambio));

/**
 * Operadores aritmeticos
 */
// var numero1 = Number(prompt('Número 1'));
// var numero2 = Number(prompt('Número 2'));
// var suma = numero1 + numero2;

// alert('Suma: '+suma);

/**
 * Estructura de control switch
 */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// var resultado = 0;

// for(let i = 0; i <= 50; i++){
//     resultado += i;
//     //document.write(resultado + '<br>');
// }

// var lista = ['Pera', 'Manzana', 'Uva'];
// var posicion = 0;

// while(posicion < lista.length){
//     document.write(lista[posicion] + '<br>');
//     posicion++;
// }

var paises = ['Colombia', 'Peru', 'Mexico'];
var numeroos = [1, 2, 3];

/**Metodos */
var amigos = ['Maria', 'Pablo', 'Carlos'];

//console.log(amigos);

//Longitud
//console.log(amigos.length);

//Agregar elemento
amigos.push('Mariana', 'Pepe');

//Agregar elementos en una posicion
//Posicion
//Elementos a eliminar
//Elementos a agregar
amigos.splice(1, 0, 'Matias', 'Juan');


//ELiminar ultima posición
amigos.pop();
//console.log(amigos, amigos.length);

//Eliminar una matriz
var slice = amigos.slice(2);
//console.log(slice);

//Concatenar 2 arreglos
var amigos2 = ['Sandra', 'Camila'];
var amigos_totales = amigos.concat(amigos2);
console.log(amigos_totales);

//Separar elementos
console.log(amigos_totales.join(" "));

//Ordenar elementos
console.log(amigos_totales.sort());

for(let i = 0; i < amigos_totales.length; i++){
    console.log(amigos_totales[i]);
}


