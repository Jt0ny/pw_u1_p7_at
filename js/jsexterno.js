function cambiarColor(idelemento,color) {
    document.getElementById(idelemento).style.color = color;
}

function cambiarTamanio(idelemento,tamanio) {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

function cambiarTexto(idelemento,valor) {
    document.getElementById(idelemento).innerText = valor;
}

function agregarElemento(idelemento,elementoHTML) {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementoHTML;
}