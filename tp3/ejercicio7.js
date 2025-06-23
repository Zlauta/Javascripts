let num = parseInt(prompt("Ingresar Un Numero"))

function tablaDeMultiplicar(numero) {

    console.log("Tabla Del", numero);

    for(let i = 1; i <= 10; i++){
        console.log(numero + " x " + i + " = ", numero * i);

    }
}

tablaDeMultiplicar(num)