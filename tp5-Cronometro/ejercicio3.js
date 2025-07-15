let segundos = 0;
let minutos = 0;
let miliSegundos = 0;
let intervalos;

const numeroCronometro = document.getElementById("numeroCronometro");

function actualizarTiempo() {
  numeroCronometro.textContent = `${minutos < 10 ? "0" + minutos : minutos} : ${
    segundos < 10 ? "0" + segundos : segundos
  } :
     ${miliSegundos < 10 ? "0" + miliSegundos : miliSegundos}`;
}
function inicioCronometro() {
  clearInterval(intervalos);
  intervalos = setInterval(() => {
    miliSegundos++;
    if (miliSegundos === 100) {
      miliSegundos = 0;
      segundos++;
    }
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    actualizarTiempo();
  }, 10);
}

const inicio = document.getElementById("inicio");
inicio.addEventListener("click", function () {
  inicioCronometro();
});

const pausa = document.getElementById("pausa");
pausa.addEventListener("click", function () {
  clearInterval(intervalos);
});
const reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
  clearInterval(intervalos);
  miliSegundos = 0;
  segundos = 0;
  minutos = 0;
  actualizarTiempo();
});

actualizarTiempo();
