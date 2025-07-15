const btnComenzarJuego = document.getElementById("btnComenzarJuego");
let numeroMagico;

btnComenzarJuego.addEventListener("click", function () {
  this.style.display = "none";
  numeroMagico = Math.floor(Math.random() * 100 + 1);
  if (btnComenzarJuego) {
    confirm("Deseas Comenzar El Juego");
  }
  TextosSiGanaONo.textContent = "Adivina El Numero Del 1 Al 100";
});
const TextosSiGanaONo = document.getElementById("TextosSiGanaONo");
const formNumeroMagico = document.getElementById("formNumeroMagico");
const numeroMagicoUsuario = document.getElementById("numeroMagicoUsuario");

formNumeroMagico.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(numeroMagicoUsuario.value);
  if (numeroMagico == parseInt(numeroMagicoUsuario.value)) {
    TextosSiGanaONo.textContent = "Felicitaciones Ganaste!!!";
  } else if (numeroMagico > numeroMagicoUsuario.value) {
    TextosSiGanaONo.textContent = "Uff Casi, Proba Mas Arriba";
  } else if (numeroMagico < numeroMagicoUsuario.value) {
    TextosSiGanaONo.textContent = "Uff Casi, Proba Mas Abajo";
  } else if (numeroMagico > 100) {
    TextosSiGanaONo.textContent = "Te Pasaste Del Numero Indicado";
  }
  numeroMagicoUsuario.value = "";
});

const botonReiniciar = document.getElementById("botonReiniciar");
botonReiniciar.addEventListener("click", function () {
  location.reload();
});
