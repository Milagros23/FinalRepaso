window.onload=function(){
  document.getElementById("form3").onsubmit=function(e){
   e.preventDefault();
 }

 document.getElementById("iniciaSesion").addEventListener("click",function(){
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   if(email.length!=0 && password.length!=0){
    document.getElementById("form3").reset()
     window.location="ingreso.html";
   }
   else{
     var mensaje = document.getElementById("llenarDatos2");
     mensaje.innerText = "Todos los campos son obligatorios"
   }

 });
}
