//Receba um número inteiro e diga se é positivo ou negativo
const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));
if(numero > 0){

    console.log(`O ${numero} é positivo`)

}
else{
    console.log(`O ${numero} é negativo`)
}