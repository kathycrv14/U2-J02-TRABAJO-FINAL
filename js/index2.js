/*
/*
    Ingresar a pagina1 siempre y cuando 
    se ingrese un correo correctamente
    En caso contrario se muestra el mensaje de error
*/

// ENTRADA

const email = document.getElementById("txtEmail");
const error = document.getElementById("emailVal");
const btnEnviar = document.getElementById("btnEnviar");
let mensaje = "";
btnEnviar.onclick = function(){
    let vemail = email.value;
    let arroba = 0;
    arroba = vemail.indexOf("@");
    if(arroba < 0){
        mensaje = arroba[0] + " " + arroba[1];
    }else{
        window.location.replace("gracias.html");
    }
    error.innerText = mensaje;
};

