let numero=parseInt(prompt("Ingrese un Numero"))


if (numero % 2 === 0){
    console.log("el numero", numero, "es divisible por 2" )
}
else if (numero % 3 === 0) {
    console.log("el numero", numero, "es divisible por 3" ) 
}
else if (numero % 5 === 0) {
    console.log("el numero", numero, "es divisible por 5" ) 
}
else if (numero % 7 === 0) {
    console.log("el numero", numero, "es divisible por 7" ) 
}else{
    console.log(" el numero", numero, "no es divisible ni por 2, 3, 5, 7")
}
