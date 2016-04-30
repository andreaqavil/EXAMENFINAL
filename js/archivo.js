var $desplegue = $("<div id='desplegue'> </div>");
var $imagen=$("<img>");
var $leyenda=$("<p></p>");

$desplegue.append($imagen); 
$desplegue.append($leyenda);
$("body").append($desplegue);

$("#foto li a").click(function(event) {
event.preventDefaul();
var herf=$(this).attr("herf");
$imagen.attr("scr","herf");

var texto= $(this).children("img").attr("alt");
$leyenda.text(texto);

$desplegue.show();
console.log(herf);
});
$("#foto li a").click