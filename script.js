//se obtiene un elemento de html indicando su id y se almacena en una variable
let tablero = document.getElementById("tablero");
let playB = document.getElementById("play");
let pauseB = document.getElementById("pause");
let resetB = document.getElementById("reset");

// Estados Cronometro
let esta_activo = false;//el boton play esta apagado
let time = {
 decimas  : 0,
 segundos : 0,
 minutos  : 0
}

//funcion que muestra el cronometro con dos ceros
function formato(numero){
    if(numero<10){//si el numero es de 1 digito, entonces, concatenele un cero
    return "0"+numero;
    }
    else{
    return numero;
    }
   }

//funcion que actualiza el cronometro
function actualizar(){
    time.decimas++;
    if(time.decimas == 10){
    time.decimas = 0;
    time.segundos++;
    }
    if(time.segundos == 60){
    time.segundos = 0;
    time.minutos++;
    }
    tablero.innerHTML = formato(time.minutos) + ":" + formato(time.segundos) + ":" + formato(time.decimas);/*modifica el elemento tablero de
    html que es 00:00:00 por el valor asignado*/
   
    if(esta_activo == true){//si se presiona play hacer el conteo
    setTimeout(actualizar,100);//llama a una función después de un número especificado de milisegundos, osea, ejecuta la funcion actualizar
    //cada 100 milisegundos
    }
   }

//Funciones Botones
function play(){
    if(esta_activo == false){//si el boton esta apagado, entonces, activarlo y llamar la funcion actualizar 
    esta_activo = true;
    actualizar();
    }
   }
function pause(){
    esta_activo = false;
   }
function reset(){
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = "00:00:00"
   }

/*Escuchar Eventos: a cada boton se le añade un evento listener pasandole como parametro el tipo de evento y la funcion que se debe ejecutar
cuando ocurra el evento*/
playB.addEventListener('click', play);//click es tipo de evento y play es la funcion que se debe ejecutar cuando se haga click
pauseB.addEventListener('click', pause);
resetB.addEventListener('click', reset);