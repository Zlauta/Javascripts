let ciudades = []
let ciudad;

 while (true) {
    ciudad = prompt("Ingresar Ciudades (Cancelar Para Salir)")

    if(ciudad === null) break;
      ciudades.push(ciudad)

 }

 console.log("El Arreglo De Ciudades Tiene", ciudades.length, "Elementos")

 let primeraCiudad = ciudades[0] || "No ingresado"
  let terceraCiudad = ciudades[2] || "No Ingresado"
   let ultimaCiudad = ciudades[ciudades.length - 1 ] || "No Ingresado"
    let modiParis = ciudades.push("paris")
     let segundaCiudad = ciudades[1] || "No Ingresado"

   console.log("Primer Poscision:", primeraCiudad)
   console.log("Segunda Poscision:",segundaCiudad)
   console.log("tercera Poscision:", terceraCiudad)
   console.log("Ultima Poscision:", ultimaCiudad)
   console.log("Ultima Poscicion:", ciudades[ciudades.length - 1])
   
   ciudades[1]= "barcelona"

   console.log("Arreglos De Ciudades")

  ciudades.forEach(ciudade => {
    console.log( ciudade)
    
  });

  