let numeroPromp = parseInt(prompt("Ingresar Un Numero"))

function parImpar(num) {

     if(num % 2 === 0){
        return "es par"
    }else{
        return "es impar"
    }

}

console.log(parImpar(numeroPromp))
