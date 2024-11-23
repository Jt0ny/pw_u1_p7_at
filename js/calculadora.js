var num1 = null;
var num2 = null;
var operacion = '';

function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    valor = document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText; 
    if (valorActual === '0') {
       
        document.getElementById('id-display').innerText = valor;
    } else {
        
        document.getElementById('id-display').innerText = valorActual + valor;
    }
}

function recibirValor(valor) {

     // Si aún no se ha seleccionado una operación, construimos num1
    if (operacion === '') {
        if (num1 === null) {
            num1 = valor; 
        } else {
            num1 = parseFloat(num1.toString() + valor.toString()); // Concatenamos 
        }
        setearValorConcatenado(valor); 
    } else {
    
        if (num2 === null) {
            num2 = valor;
        } else {
            num2 = parseFloat(num2.toString() + valor.toString());  
        }
        setearValorConcatenado(valor); 
    }
   
}



function recibirOperacion(op) {
    if (num1 !== null) {
        operacion = op;
        setearValorConcatenado(` ${op} `); 
    }
}


function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === 'x') {
        valorFinal = num1 * num2;
    }
    else if (operacion === '%') {
        valorFinal = num2 !== 0 ? num1 / num2 : 'Error';
    }
    setearValor(`${num1} ${operacion} ${num2} = ${valorFinal}`);
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
        valorActual = '0';
    }

    
    document.getElementById('id-display').innerText = valorActual;

    // Actualiza los números en la lógica interna
    if (operacion === '') {
        num1 = parseFloat(valorActual) || null; 
    } else {
        num2 = parseFloat(valorActual) || null; 
    }
}



