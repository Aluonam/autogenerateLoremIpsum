
let parrafo = ""; //guardará las palabras aleatorias 


const loremIpsum = [" lorem", " ipsum", " dolor", " sit", " amet", " consectetur,", " adipisicing", " elit.", " quam", " vero", " quibusdam", " ea", " molestiae", " quis", " quidem", " minima?", " temporibus", " placeat,", " inventore", " possimus?"];



const controlClick = () => {
    const idBtn = document.getElementById("btnId");
    idBtn.addEventListener("click", () => {numParrafos(valorInput())});
}

const numParrafos = (numeroDeParrafos) => {
    parrafo=""; //primero limpiamos la variable y luego ejecutamos el for, sino no parará de acumular párrafos.
    for (let i = 0; i < numeroDeParrafos; i++) { //variable i, es una variable contador para contar las vueltas que lleva el ciclo for.
        generarParrafo();
        parrafo = parrafo + "<br>"; //la variable parrafo es igual al valor que tuviese antes mas un salto de linea. Seria lo mismo que poner: 
        // parrafo += "<br>";
    }
    aniadirParrafoDom();
}

const valorInput = ()=>{ //hay que meter el valor dentro de una funcion porque si lo declaraba como una variable global cogia el valor inicial de parrafo que esta en blanco 
    let numeroElegido = document.getElementById("inputNum");
    return(numeroElegido.value); //.value para que retorne el valor que se le ha dado desde el DOM
}

const generarParrafo = () => { 
    for (let i= 0; i < 15; i++) {
        const numAleatorio = Math.floor(Math.random() * loremIpsum.length);
        if (i === 0) { //si es la primera vuelta se pone en mayusculas la primera letra
            parrafo = parrafo + loremIpsum[numAleatorio].charAt(1).toUpperCase() + loremIpsum[numAleatorio].slice(2); //cojo la letra de la posicion 1 y la paso a mayusculas y le sumo el resto de la palabra. * es un 1 porque el espacio ocupa la posicion 0. Es un 2 en slice porque es la siguiente posición a la 1 y por tanto desde donde se recorta.
        } else {
           parrafo = parrafo + loremIpsum[numAleatorio]; //y si no se le suma la palabra como está, sin hacerle cambios.
        }
    }
}

const aniadirParrafoDom = () => { //añadir al DOM el texto generado.
    const textoGenerado = document.getElementById("textoGeneradoId");
    textoGenerado.innerHTML = parrafo;
}


controlClick();

