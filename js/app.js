window.onload=function(){
  document.getElementById("form2").onsubmit=function(e){
   e.preventDefault();
 }
 function Coder(nombre, apellido, email, password) {
   this.nombre = nombre;
   this.apellido = apellido;
   this.email = email;
   this.password = password;

 };
 var coder = [];

 document.getElementById("registrate").addEventListener("click",function(){
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;

   if(nombre.length!=0 && apellido.length!=0 && email.length!=0 && password.length!=0){
     console.log(new Coder(nombre,apellido,email,password));
     localStorage.setItem("coders",JSON.stringify(new Coder(nombre,apellido,email,password)));
          document.getElementById("form2").reset()
     window.location="coder.html";
   }
   else{
     var indicacion = document.getElementById("llenarDatos");
     indicacion.innerText = "Todos los campos son obligatorios"
   }

   if()
 });
}
