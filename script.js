let numeroSecret;   
let intentsMaxims;   
let intentsFets = 0; 

const inputIntents = document.querySelector('header input');
const btnGuardar = document.querySelector('header .btn');
const btnReinicia = document.querySelector('header button:last-child');
const inputGuess = document.querySelector('.guess');
const btnProva = document.querySelector('.zona-joc .btn');
const txtIntents = document.querySelector('.zona-joc p');
const missatge = document.querySelector('.zona-missatge');
const body = document.querySelector('body');

function guardarIntents() {
    const val = Number(inputIntents.value);
    if (val <= 0) {
        alert("Els intents han de ser més grans que 0");
        return;
    }
    intentsMaxims = val;
    intentsFets = 0;
    numeroSecret = Math.floor(Math.random() * 100) + 1;
    txtIntents.textContent = `Intents restants: ${intentsMaxims}`;
    missatge.textContent = "Comencem la partida!!";
    body.style.backgroundColor = "#222";
    inputGuess.value = "";
    inputGuess.disabled = false;
    btnProva.disabled = false;
    inputGuess.focus();
}

function jugar() {
    const numeroUsuari = Number(inputGuess.value);
    if (numeroUsuari < 1 || numeroUsuari > 100) {
        alert("Introdueix un número entre 1 i 100");
        return;
    }
    intentsFets++;
    const intentsRestants = intentsMaxims - intentsFets;
    txtIntents.textContent = `Intents restants: ${intentsRestants}`;
    if (numeroUsuari === numeroSecret) {
        missatge.textContent = "Correcte, Has endevinat el número";
        body.style.backgroundColor = "green";
        inputGuess.disabled = true;
        btnProva.disabled = true;
    } else if (intentsRestants === 0) {
        missatge.textContent = `Has perdut! El número era ${numeroSecret}`;
        body.style.backgroundColor = "red";
        inputGuess.disabled = true;
        btnProva.disabled = true;
    } else if (numeroUsuari > numeroSecret) {
        missatge.textContent = "El número secret és més PETIT";
    } else {
        missatge.textContent = "El número secret és més GRAN";
    }
    inputGuess.value = "";
    inputGuess.focus();
}

function reiniciar() {
    intentsMaxims = 0;
    intentsFets = 0;
    numeroSecret = undefined;
    txtIntents.textContent = "Intents restants: 0";
    missatge.textContent = "Comencem la partida!!";
    body.style.backgroundColor = "#222";
    inputIntents.value = "";
    inputGuess.value = "";
    inputGuess.disabled = false;
    btnProva.disabled = false;
    inputIntents.focus();
}


btnGuardar.addEventListener('click', guardarIntents);
btnProva.addEventListener('click', jugar);
btnReinicia.addEventListener('click', reiniciar);