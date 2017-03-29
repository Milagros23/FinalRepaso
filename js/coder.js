window.onload=function(){
var nombre = document.getElementById("nombrecod");
var apellido = document.getElementById("apellidocod");
var email = document.getElementById("emailcod");
var password = document.getElementById("passcod");

var codob = JSON.parse(localStorage.getItem("coders"));

nombre.innerText=codob.nombre;
apellido.innerText=codob.apellido;
email.innerText=codob.email;
password.innerText=codob.password;

function Coder(nombre, apellido, email, password) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.password = password;
		};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
 };
