let intervalo;
let totalSegundos;

function iniciarTemporizador() {
  const min = parseInt(document.getElementById("minutos").value);
  const seg = parseInt(document.getElementById("segundos").value);

  totalSegundos = min * 60 + seg;

  if (isNaN(totalSegundos) || totalSegundos <= 0) {
    alert("Ingresá un tiempo válido.");
    return;
  }

  clearInterval(intervalo);

  mostrarTiempo();

  intervalo = setInterval(() => {
    totalSegundos--;
    mostrarTiempo();

    if (totalSegundos <= 0) {
      clearInterval(intervalo);
      document.getElementById("tiempoRestante").textContent =
        "¡Tiempo terminado!";
    }
  }, 1000);
}
function detenerTemporizador() {
  clearInterval(intervalo);
}
function reiniciarTemporizador() {
  clearInterval(intervalo);
  document.getElementById("tiempoRestante").textContent = "00:00";
}

function mostrarTiempo() {
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  const formato =
    (minutos < 10 ? "0" : "") +
    minutos +
    ":" +
    (segundos < 10 ? "0" : "") +
    segundos;

  document.getElementById("tiempoRestante").textContent = formato;
}
const inicio = document.getElementById("inicio");
inicio.addEventListener("click", function () {
  iniciarTemporizador();
});
const pausa = document.getElementById("pausa");
pausa.addEventListener("click", function () {
  detenerTemporizador();
});
const reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
  reiniciarTemporizador();
});
