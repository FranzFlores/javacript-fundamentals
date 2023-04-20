'use strict'

window.addEventListener('load', function () {

    function interval() {
        var time = setInterval(function () {
            console.log("Intervalo ejecutado");

            var header = document.querySelector("#text");
            header.style.fontSize = (header.style.fontSize == '50px') ? '30px' : '50px';
        }, 1000);

        return time;
    }

    var time = interval();

    // Parar la ejecución del intervalo
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function () {
        alert("Has parado el intervalo en bucle");
        clearInterval(time);
    });

    // Iniciar la ejecucación del intervalo
    var start = document.querySelector("#start");
    start.addEventListener("click", function () {
        alert("Has iniciado el intervalo en bucle");
        interval();
    });

});