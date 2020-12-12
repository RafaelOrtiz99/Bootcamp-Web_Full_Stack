$("#parrafo").css('font-size', '30px');
$(".clase").css('color', 'red');    

$("li").css('color', 'green');
$("[title=elementoLista]").css('background-color', 'blue');


/**CLick */
$(".perro").click(function(){
    $(this).css('color','red');
    $(this).css('font-size','50px');
});

/**Doble click */
$(".gato").dblclick(function(){
    $(this).css('background-color', 'black')
});

/**Mouse */
$(".imagen").mouseover(function(){
    $(this).css('filter','saturate(180%)');
});

$(".imagen").mouseout(function(){
    $(this).css('filter', 'grayscale(80%');
});

/**Hover */
function cambio1(){
    $(this).css('background', 'red');
}

function cambio2(){
    $(this).css('background', 'blue');
}

$('.box1').hover(cambio1, cambio2);

/**Focus */
$('.input').focus(function(){
    $(this).css('border','5px solid red');
});

$('.input').blur(function(){
    $(this).css('border','5px solid green');
});

/**Mouse Move */
$(document).mousemove(function(){
    $('.mouse').css('top', event.clientY).css('left', event.clientX)
})
