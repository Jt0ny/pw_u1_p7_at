var num1 = null;
var num2 = 0;
var operacion = '';

function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    valor = document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').inertText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    if (num1 === null) {
        num1 === valor;
    } else {
        num2 === valor;
    }
    num1 === valor;
}



function recibirOperacion(op) {
    operacion = op;
}

function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else {
        valorFinal = num1 - num2;
    }
    setearValor(valorFinal);
    console.log(valorFinal);
}


