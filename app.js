/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al numero maximo";*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //no retorna nada pero se debe colocar por buena practica en cualquier funcion
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return; 
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
    /*let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";*/
}

function generarNumeroSecreto() {
    //si el numero generado esta incluido en la lista
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros para cerrar el juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p" , "Ya se sortearon todos los números posibles")
    }else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

        
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    
    //indicart mesaje de inicio
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    document.querySelector("#reiniciar").setAttribute("disabled","true");
    //desahilitar boton de nuevo juego

    return
}

condicionesIniciales();
//asignarTextoElemento("h1", "Juego del número secreto!");
//asignarTextoElemento("p", "Indica un número del 1 al 100");