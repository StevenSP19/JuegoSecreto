let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarEvento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número secreto. en ${intentos} ${(intentos  === 1)? 'intento' : 'intentos'}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroUsuario + '.');
        } else if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor que ' + numeroUsuario + '.');
        }
        intentos ++;
        limpiarCampos();
    }
    return;
}

function limpiarCampos() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'No hay más números disponibles para jugar.');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCampos();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute("disabled", "true");
}

condicionesIniciales();
