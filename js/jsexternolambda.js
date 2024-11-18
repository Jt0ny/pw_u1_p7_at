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


     //Arreglo de objetos

     const estu1 = {
        nombre: 'Luis',
        apellido: 'Valladares',
        edad: 25,
    }
    const estu2 = {
        nombre: 'jose',
        apellido: 'perez',
        edad: 23,
    }
    const estu3 = {
        nombre: 'jorge',
        apellido: 'gomez',
        edad: 30,
    }

    const estudiantes = [estu1, estu2, estu3];
    console.log(estudiantes);
    console.log(estudiantes[1]);

    const arregloEstudiantes2 = [{
        nombre: 'Luis',
        apellido: 'Valladares',
        edad: 25,
    }, {
        nombre: 'jose',
        apellido: 'perez',
        edad: 23,
    }, {
        nombre: 'jorge',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'juan',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'jose',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'carla',
        apellido: 'gomez',
        edad: 30,
    }];

    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);
    const estudiante = arregloEstudiantes2.pop(); //.pop() elimina el ultimo elemento del arreglo
    console.log(estudiante);
    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);

    // Desestructuracion de arreglos
    // consiste en separar en partes los elementos de un arreglo
    const colores = ['rojo', 'azul', 'verde', 'amarillo', 'rosado'];
    const [p1, p2, p3, p4, p5] = colores;
    console.log(p1);
    console.log(p5);

    const [m1, m2, m3, m4, m5, m6] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m6);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(mes2);
    console.log(mes5);

    // Desestructuracion de objetos
    console.log('--------------------> Desestructuracion de objetos');
    const automovil = {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2021,
        color: 'rojo',
    }

    /*const { marca, modelo, anio, color } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
    */

    const automovil2 = {
        marca: 'Mazda',
        modelo: '3',
        anio: 2024,
        color: 'negro',
    }

    desestructuracion(automovil2);
    desestructuracion(automovil);

    const { nombreP, raza, estatura } = { nombreP: "Perro", raza: "pitbull", estatura: 126 }
    console.log(nombreP)
    console.log(raza)
    console.log(estatura)

    //Trabajo en clase
    //definir y desestructurar en una sola linea
    const { nombreE, presidente: { nombrePr, edadp }, deporte } = { nombreE: 'IDV', presidente: { nombrePr: 'Franklin ', edadp: 60 }, deporte: "Futbol" }
    console.log(nombrePr)
    
    //desestructurar en dos pasos 
    const universidad = {
        nombreU: 'UCE',
        rector : {
            nombreR: 'Juan',
            edadR: 50,
        },
        estudiantesU : 5000
    }
    const {nombreU,estudiantesU, rector}=universidad
    console.log(rector)
    const {nombreR,edadR}=rector
    console.log(nombreR)
}
const desestructuracion = ({ marca, modelo, anio, color }) => {
    console.log('metodo de Desestructuracion de objetos');
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}
