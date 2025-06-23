let ingresarTexto = prompt("Ingresar Texto")

function analizarTexto(texto) {

  if (texto === texto.toUpperCase()) {
    console.log("La cadena está formada solo por MAYÚSCULAS.");
  } else if (texto === texto.toLowerCase()) {
    console.log("La cadena está formada solo por minúsculas.");
  } else {
    console.log("La cadena es una mezcla de mayúsculas y minúsculas.");
  }

}

analizarTexto(ingresarTexto)