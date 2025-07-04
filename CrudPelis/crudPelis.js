// Realizar el switch para preguntar al usuario
// que accion desea realizar y
// mostrar por consola lo que el usuario eligio
function mostrarMenu() {
    let opcionesPelis = parseInt(prompt(
    "Selecciona La Opcion Deseada\n" + 
    "1 - Agregar Pelicula\n" + 
    "2 - Listar Peliculas \n" +  
    "3 - Buscar Peliculas Por Titulo \n" +
    "4 - Actualizar Pelicula Calificacion \n" +
    "5 - Eliminar Pelicula \n" + 
    "6 - Salir Del Menu\n"))
let numero = ""

switch (opcionesPelis) {
    case 1:
        numero = "Agrega Tu Pelicula"
        break;
        case 2:
        numero = "Lista De Peliculas"
        break;
        case 3:
        numero = "Que Pelicula Desea Buscar"
        break;
        case 4:
        numero = "Que Pelicula Desea Editar"
        break;
        case 5:
        numero = "Que Pelicula Desea Eliminar"
        break;
        case 6:
        numero = "Muchas Gracias Por visitar NUestra Pagina"
        break;
    default:
        console.log("Por favor ingrese un numero valido...")
        break;
}
console.log(numero)
}
mostrarMenu()