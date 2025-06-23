let ladoA = parseInt(prompt("Ingresar Lados De Un Rectangulo"))
let ladoB = parseInt(prompt("Ingresar Lados De Un Rectangulo"))

function rectangulo(ladoA, ladoB) {
    return 2 * ladoA + ladoB
}

console.log("El Perimetro Del Rectangulo Es:", rectangulo(ladoA, ladoB))