let apariciones = Array(13).fill(0);

let dado1;
let dado2;

for(let i = 0; i < 50; i++){
    dado1 = Math.floor(Math.random() * 6) + 1
    dado2 = Math.floor(Math.random() * 6) + 1
    let suma = dado1 + dado2

    apariciones[suma]++

}

for(let i = 2; i <= 12; i++){
        console.log ("suma " + i + " aparecío " + apariciones[i] + " veces ")
}