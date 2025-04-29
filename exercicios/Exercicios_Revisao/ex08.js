//Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))
if(numero > 0){

    console.log(`O ${numero} é positivo`)

}
else{
    console.log(`O ${numero} é negativo`)
}