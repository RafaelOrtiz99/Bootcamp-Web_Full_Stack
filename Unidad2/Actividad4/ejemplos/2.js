//Funciones = conjunto de ordenes agrupadas con un nombre asignado

function mensaje(){
    alert('bien');
}

function calculadora(){
    var opciones = Number(prompt('1.Suma\n 2.Resta\n 3.Multiplicación\n 4.División'));
    var resultado = 'invalido';

    var num1 = Number(prompt('Número 1'));
    var num2 = Number(prompt('Número 2'));

    switch(opciones){
        case 1:
            resultado = num1 + num2; 
            break;
        case 2:
            resultado = num1 - num2; 
            break;
        case 3:
            resultado = num1 * num2; 
            break;
        case 4:
            resultado = num1 / num2; 
            break;
         default:
             alert('Opción no valida');
             break;
    }

    alert('Resultado: '+resultado);
}

var se