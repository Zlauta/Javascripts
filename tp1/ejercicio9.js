let frase= prompt("ingrese su frase")

console.log("la frase ingresada es:",frase)

for (let i = 0; i < frase.length ; i++){
    let letras = frase.charAt(i).toLowerCase()

    if("aeiou".includes(letras)){

        console.log("las vocales son", letras)
    }
    
}

