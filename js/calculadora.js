var num1 = null;
var num2 = null;
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
       
        num1 =valor;
        
    } else {
        num2 = valor;
        
    }
    /*num1 = valor;  */
   setearValor(valor);
}



function recibirOperacion(op) {
    operacion = op;
   
}


function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    }else if (operacion === 'x') {
        valorFinal = num1 * num2;
    }
    else if (operacion === '%') {
        valorFinal = num2 !== 0 ? num1 / num2 : 'Error';
    }
    setearValor(valorFinal);
    console.log(valorFinal);
}


function limpiar() {
    num1 = null;
    num2 = null;
    operacion = '';
    setearValor(0);
}
 
function borrarUltimo() {
    let valorActual = document.getElementById('id-display').innerText;

    if (valorActual.length > 1) {
        // Elimina  último 
        valorActual = valorActual.slice(0, -1);
    } else {
        // Si solo queda un carácter, reinicia el display a "0"
        valorActual = '0';
    }

    // Actualiza 
    document.getElementById('id-display').innerText = valorActual;

    // Actualiza los números en la lógica interna
    if (operacion === '') {
        num1 = parseFloat(valorActual) || null; // Si display está vacío, num1 será null
    } else {
        num2 = parseFloat(valorActual) || null; // Si display está vacío, num2 será null
    }
}



