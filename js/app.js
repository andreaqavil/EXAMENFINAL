

var html="";
var sucursal1=
{
provincia: "El Oro", ubicacion: "Centro Comercial Paseo Shopping Machala", Horarioatencion: 10:30 23:30, 
};
var sucursal2 =
{
provincia:"Pichincha", ubicacion: Av. America y Naciones Unidas, Horarioatencion:10:30 23:30"
};
var sucursal3 =
{
provincia:"Manabí", ubicacion: Paseo Shopping Av. 4 de Noviembre, Horarioatencion:10:30 23:30"
};

var sucursal =[];
sucursal.push(sucursal1);sucursal.push(sucursal2);sucursal.push(sucursal3);

for (var i=0; i < sucursal.length; i ++)
{
listHTML = '<ul><li>' + sucursal[i].provincia+ '<br>'+sucursal[i].ubicacion+ '<br>'+sucursal[i].Horarioatencion+ '<br>'+'</li></ul>';
var infoDiv = document.getElementById("dir-sucursales"); 
infoDiv.innerHTML+=listHTML;