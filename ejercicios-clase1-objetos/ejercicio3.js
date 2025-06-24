const persona = { nombre: "Lautaro", edad: "23" };

function recorrer() {
  for (let clave in persona) {
    console.log("la propiedad", clave, "vale", persona[clave]);
  }
}
recorrer();
