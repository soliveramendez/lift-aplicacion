 $(document).on("ready",inicio);

/* HEADER ================================*/
 $(function(){
   setTimeout(function() {
      $('#splash').fadeOut(3000);
   }, 3000);
});
/*DECLARAR ARREGLO*/
 function inicio(){
  var miArreglo = ["chile","peru","colombia","venezuela"];
  for(var i=0; i < miArreglo.length;i++){
    $("#contenido").html($("#contenido").html() + miArreglo[i]);
  }
}
/*CELULAR*/
 function validateForm(){
  var soloNumeros =/[^0-9]/;
}
  function movil(){
    var numbers = $("#numbers").val();
    console.log(numbers);

    if(numbers.length === 0){
      var agrega = $("#numbers").parent().append("<span>campo no puede estar vacio</span>");
      return false;
    }else if (!soloNumeros.test(numbers)){
      var agrega = $("#numbers").parent().append("<span>campo no puede estar vacio</span>");
    }else if(numbers.length > 9 !== $("#numbers").append("<span>ingrese número válido</span>"));
  }

/*NOMBRE*/
 function validateForm(){
  var emailValido =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var sololetras = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 }
  function name(){
   var nombre = $("#name").val();
   console.log(nombre);

  if(nombre.length === 0){
   var agrega = $("#name").parent().append("<span>campo no puede estar vacio</span>");
   return false;
 }else if (!soloLetras.test(nombre)){
  var agrega = $("#name").parent().append("<span>campo no puede estar vacio</span>");
 }else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
  var agrega = $("#name").parent().append("<span>campo no puede estar vacio</span>");
 }
}

/*BUSQUEDA
$(function(){
    var $tabla = $('#productos');

    $('#filtro_moneda').change(function(){
        var value = $(this).val();
        if (value){
            $('div.' + value, $tabla).show();
            $('div:not(.' + value + ')', $tabla).hide();
        }
        else{
            // Se ha seleccionado All
            $('div', $tabla).show();
        }
    });
})

$("#email").keyup(function(){
				//Tomamos el contenido del input:text
				var busqueda = $(this).val();
				//Seleccionar la columna a filtrar
				var rows = $(".email");
				//Mostranmos todos los resultados
				$(".email").parent().show();

				$.each(rows, function(index, value) {
				  var str = $(value).text();
				  //si existe un registro que no contenga lo que se esta buscando, se esconde.
				  if (str.indexof(busqueda) === -1) {// indexof regresa -1 si no encontro conincidencia.
				  		$(value).parent().hide();
				  }
				});
			});
*/
