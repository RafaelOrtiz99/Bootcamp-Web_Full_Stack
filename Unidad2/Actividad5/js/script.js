function cambio1(){
    $(this).css('filter', 'invert(100%)');
}

function cambio2(){
    $(this).css('filter', 'invert(0%)');
}

$('img').hover(cambio1, cambio2);