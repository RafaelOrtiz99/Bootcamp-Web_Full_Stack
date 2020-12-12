/**
 * Rafael Ortiz
 */

/**
 * 2
 */

/** Evento clic */
$('li').click(function(){
    var posicion = $(this).parent().children().index(this) + 1;
    let colorElemento = determinarColor(posicion);
    $(this).css('color',colorElemento);
});

/** Evento doble clic */
$('li').dblclick(function(){
    var posicion = $(this).parent().children().index(this) + 1;
    let proporcion = determinarProporcion(posicion);
    $(this).css('font-size', proporcion);
});

/**Función para determinar el color, según la posición en la lista (par o impar) */
function determinarColor(posicion){
    let color;

    switch(posicion%2){
        case 0:
            color = 'red';
            break;
        default:
            color = 'blue';
            break;
    }

    return color;
}

/**Función para determinar el tamaño de letra, según la posición en la lista (par o impar) */
function determinarProporcion(posicion){
    let proporcion;

    switch(posicion%2){
        case 1:
            proporcion = '2rem';
            break;
        default:
            proporcion = '1rem';
            break;
    }

    return proporcion;
}


/**
 * 3
 */

/** 
 * Cambiar color de los div 
 */

function cambio1(){
    $(this).css('filter', 'invert(30%)');
}

function cambio2(){
    $(this).css('filter', 'invert(0%)');
}

$('div').hover(cambio1, cambio2);