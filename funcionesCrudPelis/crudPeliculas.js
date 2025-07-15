let peliculas = [];
recuperarPeliculasDesdeLocalStorage();
agregarPeliculasDeEjemploSiEsNecesario();

function guardarEnLocalStorage() {
  const peliculasJSON = JSON.stringify(peliculas);
  localStorage.setItem("peliculas", peliculasJSON);
}
function recuperarPeliculasDesdeLocalStorage() {
  const peliculasRecuperadas = localStorage.getItem("peliculas");
  if (peliculasRecuperadas) {
    peliculas = JSON.parse(peliculasRecuperadas);
  } else {
    peliculas = [];
  }
}
function agregarPeliculasDeEjemploSiEsNecesario() {
  if (peliculas.length === 0) {
    agregarPeli("Harry Potter", "Felipe Marrone", 2006, 8.3);
    agregarPeli("Capitán América", "Pablo Torres", 2012, 5);
  }
}
// CREATE
function agregarPeli(titulo, director, anio, calificacion) {
  // recuperar antes de modificar para evitar sobrescribir
  recuperarPeliculasDesdeLocalStorage();
  // crear la nueva pelicula
  const nuevaPelicula = {
    id: Date.now(),
    // esto de abajo es lo mismo a lo otro de mas abajo
    // titulo: titulo,
    // director: director,
    // anio: anio,
    // calificacion: calificacion,
    titulo: prompt("Ingrese Su Pelicula"),
    director: prompt("Ingrese El Director De La Pelicula"),
    anio: parseInt(prompt("Ingrese El Año De La Pelicula")),
    calificacion: parseFloat(prompt("Ingrese La Calificacion De La Pelicula")),
  };
  // agregar la nueva pelicula al listado de peliculas
  peliculas.push(nuevaPelicula);
  guardarEnLocalStorage();
  console.log("✅ Película agregada:", nuevaPelicula);
}

// READ
function listarPelis(pelis) {
  recuperarPeliculasDesdeLocalStorage();
  // LLamamos al Id De La Lista UL
  const tituloH1 = document.getElementById("titulo");
  tituloH1.textContent = "🎬 Lista de películas:";
  const listaUl = document.getElementById("listaDesordenada");
  // Hacemos que recorra todas las peliculas de la lista Para Devolverlas Despues
  peliculas.forEach((pelis) => {
    // creamos el nodo LI Donde Tendremos Las Peliculas
    const listaLi = document.createElement("li");
    // Le Damos Texto Al LI y Mostramos
    listaLi.textContent = pelis.titulo;
    // Agregamos el LI al UL
    listaUl.appendChild(listaLi);
  });
}
function buscarPeliPorTitulo(nombrePeli) {
  recuperarPeliculasDesdeLocalStorage();
  const resultados = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(nombrePeli.toLowerCase())
  );
  console.log("🔎 Resultados de búsqueda:");
  listarPelis(resultados);
}

function actualizarCalificacion() {
  const id = parseInt(
    prompt("Ingrese el id de la pelicula que quiere actualizar")
  );
  const nuevaCalificacion = parseFloat(
    prompt("Ingrese la nueva calificación de la pelicula.")
  );
  let encontrada = false;
  peliculas = peliculas.map((peli) => {
    if (peli.id === id) {
      encontrada = true;
      return { ...peli, calificacion: nuevaCalificacion };
    }
    return peli;
  });
  if (encontrada) {
    guardarEnLocalStorage();
    alert("✅ Calificación actualizada.");
  } else {
    alert("❌ Película no encontrada con ese ID.");
  }
}

function eliminarPelicula() {
  const id = parseInt(
    prompt("Ingrese el id de la pelicula que quiere ELIMINAR")
  );
  const index = peliculas.findIndex((peli) => peli.id === id);
  if (index !== -1) {
    const confirmacion = confirm("Seguro que desea eliminar esta pelicula?");
    if (confirmacion) {
      //  encontro
      const eliminada = peliculas.splice(index, 1)[0];
      guardarEnLocalStorage();
      alert(`🗑️ Película eliminada: ${eliminada.titulo}`);
    }
  } else {
    // no lo encontro
    alert("❌ Película no encontrada.");
  }
}

// Realizar el switch para preguntar al usuario
// que accion desea realizar y
// mostrar por consola lo que el usuario eligio
function mostrarMenu() {
  let opcionesPelis = parseInt(
    prompt(
      "Selecciona La Opcion Deseada\n" +
        "1 - Agregar Pelicula\n" +
        "2 - Listar Peliculas \n" +
        "3 - Buscar Peliculas Por Titulo \n" +
        "4 - Actualizar Pelicula Calificacion \n" +
        "5 - Eliminar Pelicula \n" +
        "6 - Salir Del Menu\n"
    )
  );
  let numero = "";

  switch (opcionesPelis) {
    case 1:
      numero = "Agrega Tu Pelicula";
      agregarPeli();
      break;
    case 2:
      numero = "Lista De Peliculas";
      listarPelis();
      break;
    case 3:
      numero = "Que Pelicula Desea Buscar";
      buscarPeliPorTitulo();
      break;
    case 4:
      numero = "Que Pelicula Desea Editar";
      actualizarCalificacion();
      break;
    case 5:
      numero = "Que Pelicula Desea Eliminar";
      eliminarPelicula();
      break;
    case 6:
      numero = "Muchas Gracias Por visitar NUestra Pagina";
      break;
    default:
      console.log("Por favor ingrese un numero valido...");
      break;
  }
  console.log(numero);
}
mostrarMenu();
