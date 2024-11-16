const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const agregarElemento = (idelemento, elementoHTML) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementoHTML;
}

const conceptosJS = () => {
    /*Tipos de variables en JS
    var: para declaraciones globales, en la actualidad ya nose usa comunmente porque genera problemas de alcance.
    let: tiene un ambito local a nivel de funcion( dentro del bloque), no permite volver a declaras en el mismo bloque
    const: variables cuyo valor no cambia 
    */
    let nombre = "Anthony";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);

    /*Declaracion de Arreglos*/
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    console.log(diasSemana[5]); //undefined
    //dentro de js el concepto de nulo o no existe es undefined

    //null !== indefined
    let valor = null;
    console.log(valor);

    //console.log(valor1); //undefined

    /*Para comparaciones
     ===
    !===
    */

    diasSemana.push('Sabado');//agrega un elemento al final del arreglo
    console.log(diasSemana);

    diasSemana.unshift('Dias:');//agrega un elemento al inicio del arreglo
    console.log(diasSemana);

    const numerosImpares = [1, 3, 5, 7, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for(const dia of diasSemana){
        console.log(dia);
        if(dia === 'Viernes'){
            console.log('Al fin  Viernes');
        }else{
            console.log('Aun no llega viernes');
        }

    }

    //Objetos dentro de JS
    
    const miEstudiante = {
        nombre: "Anthony",
        apellido: "Tipan",
        edad:23,
        genero:"Masculino",
        ciudadNacimiento:"Quito"
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if(miEstudiante.edad === 18){
        console.log('Tiene 18');
    }else{
        console.log('No tiene 18');
    }

    miEstudiante.apellido="Teran";
    console.log(miEstudiante);


    //Declaraciones de atributos pero con objetos   

    const miProfesor = {
        nombre: "Juan",
        apellido: "Perez",
        edad: null,
        direccion:{
            calle:"Av. Amazonas",
            numero:"123",
            ciudad:"Quito"
        }
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);


    miProfesor.direccion.calle = "Av. America";
    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura); //undefined

    if(miProfesor.edad === miProfesor.estatura){
        console.log('Son iguales');
    }else{
        console.log('No son lo mismo');
    }
}