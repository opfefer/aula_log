const prompt = require('prompt-sync')();
//Receba 5 números 
// e verifique a soma 
// e a quantidade de todos os pares e ímpares digitados

let par = 0;
let somaPar = 0;
let impar = 0;
let somaImpar = 0;

for(let i = 0; i <5; i++){
    let nr = parseInt(prompt("Digite um número: "))

    if(nr % 2 == 0){
        par++;
        somaPar += nr
    } else {
        impar ++
        somaImpar +- nr
    }
}

console.log(`Quantidade de números pares: ${par}`)
console.log(`Soma de números pares: ${somaPar}`)
console.log(`Quantidade de números impares: ${impar}`)
console.log(`Soma de números impares: ${somaImpar}`)