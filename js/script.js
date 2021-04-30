import Countdown from "./countdown.js";

const tempoWN = new Countdown("06 may 2021 15:00:00 GMT-0300");
const tempos = document.querySelectorAll('[data-time]')

function mostrarTempo (){
tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoWN.total[index];
})
}

mostrarTempo();
setInterval(mostrarTempo, 1000)
