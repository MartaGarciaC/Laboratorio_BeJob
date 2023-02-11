let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let clave = document.getElementById('clave');
let claveConfirmada = document.getElementById('confirmacionClave');
let boton = document.getElementById('boton');
let formulario = document.getElementById('login');

let errorNombre = document.getElementById('errorNombre');
let errorEmail = document.getElementById('errorEmail');
let errorClave = document.getElementById('errorClave');
let errorConfirmacionClave = document.getElementById('errorConfirmacionClave');

var patternNombre = new RegExp('[A-Za-z]');
var patternEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

boton.addEventListener('click', comprobar);
function comprobar() {

    limpiar();
    /* Variable para confirmar que todos los campos del formulario cumplen los requisitos establecidos.
    En caso contrario, la variable tomara el valor "false" en su comprobacion correspondiente */
    let envio = true;

    /* Comprobacion del campo nombre.
    Cuando el valor es correcto se agrega la clase "formOk" y un borde verde. En caso de que el valor
    sea incorrecto se agrega la clase "formError", se muestra un texto con el error correspondiente y un borde rojo.
    Esta funcionalidad se ejecuta en todos los bloques de comprobacion */
    if(nombre.value=="") {
        nombre.style.border = '3px solid red';
        nombre.classList.add ("formError");
        errorNombre.style.color = 'red';
        errorNombre.innerHTML = "Rellene este campo";
        envio = false;
    } else if(!patternNombre.test(nombre.value)) {
        nombre.style.border = '3px solid red';
        nombre.classList.add ("formError");
        errorNombre.style.color = 'red';
        errorNombre.innerHTML = "El campo solo puede contener letras";
        envio = false;
    } else {
        nombre.style.border = '3px solid green';
        nombre.classList.add ("formOk");
    }

    // Comprobacion del campo email
    if(email.value=="") {
        email.style.border = '3px solid red';
        email.classList.add ("formError");
        errorEmail.style.color = 'red';
        errorEmail.innerHTML = "Rellene este campo";
        envio = false;
    } else if(!patternEmail.test(email.value)) {
        email.style.border = '3px solid red';
        email.classList.add ("formError");
        errorEmail.style.color = 'red';
        errorEmail.innerHTML = "Email inválido";
        envio = false;
    } else {
        email.style.border = '3px solid green';
        email.classList.add ("formOk");
    }

    // Comprobacion del campo clave
    if(clave.value=="") {
        clave.style.border = '3px solid red';
        clave.classList.add ("formError");
        errorClave.style.color = 'red';
        errorClave.innerHTML = "Rellene este campo";
        envio = false;
    } else {
        clave.style.border = '3px solid green';
        clave.classList.add ("formOk");
    }

    // Comprobacion del campo confirme su clave
    if(claveConfirmada.value=="") {
        claveConfirmada.style.border = '3px solid red';
        claveConfirmada.classList.add ("formError");
        errorConfirmacionClave.style.color = 'red';
        errorConfirmacionClave.innerHTML = "Rellene este campo";
        envio = false;
    } else if(clave.value != claveConfirmada.value) {
        claveConfirmada.style.border = '3px solid red';
        claveConfirmada.classList.add ("formError");
        errorConfirmacionClave.style.color = 'red';
        errorConfirmacionClave.innerHTML = "Las contraseñas no coinciden";
        envio = false;
    } else {
        claveConfirmada.style.border = '3px solid green';
        claveConfirmada.classList.add ("formOk");
    }

    /* Esta funcion incorpora un delay de 100 milisegundos a la hora de mostrar el alert cuando
    la inscripcion es correcta.
    Esto se hace para poder aplicar los estilos correspondientes antes de mostrar el alert */
    setTimeout(function(){
        if(envio) {
            alert('La inscripción ha sido correcta')
        }
    }, 100);
}

// Se limpia el mensaje de error y los bordes del formulario 
function limpiar() {
    errorNombre.innerHTML = "";
    errorEmail.innerHTML = "";
    errorClave.innerHTML = "";
    errorConfirmacionClave.innerHTML = "";
    nombre.classList.remove ("formError");
    nombre.classList.remove ("formOk");

    email.classList.remove ("formError");
    email.classList.remove ("formOk");

    clave.classList.remove ("formError");
    clave.classList.remove ("formOk");

    claveConfirmada.classList.remove ("formError");
    claveConfirmada.classList.remove ("formOk");
}

// Enviar con tecla intro
formulario.addEventListener('keyup', function(event){
    if(event.keyCode == 13) {
        document.getElementById('boton').click();
    }
});