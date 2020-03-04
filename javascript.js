
var parrafo = document.createElement("h1")
var contenido = document.createTextNode("Top News");
	

parrafo.appendChild(contenido);
	

var contenido = document.getElementById("container")

contenido.appendChild(parrafo);

var caja = document.createElement("input");


1
var etiqueta = document.createElement("label");

2
var texto = document.createTextNode("Busqueda");
etiqueta.appendChild(texto);
caja.setAttribute("type", "text");
caja.setAttribute("id", "Nombre");
caja.setAttribute("value", "Busqueda");                
caja.style.border = "1px solid #F54500";
caja.style.background = "white";
caja.style.color = "black";
caja.style.padding = "2px";
caja.style.height = "30px";

document.getElementById("header").appendChild(etiqueta);
document.getElementById("header").appendChild(caja);


var title = document.createElement("h2")

title.setAttribute("id", "title");
var texto1 = document.createTextNode("Ultimas noticias ");

title.appendChild(texto1)
document.getElementById("container").appendChild(title);

var nav = document.createElement("nav")
var ul = document.createElement("ul")
var li= document.createElement("li")

nav.style.display = "flex";



var texto2 = document.createTextNode("Escriba su nombre ");

li.appendChild(texto2)

ul.appendChild(li)
nav.appendChild(ul)

var boton = document.createElement("button")
var contenidos = document.createTextNode("Vamos alla")

boton.appendChild(contenidos)

document.getElementById("header").appendChild(boton);