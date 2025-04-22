//Receba um inteiro e diga se é par ou ímpar
const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '))
let resto = numero % 2;
if(resto == 0){
    console.log(`${numero} é PAR`);
}else{
    console.log(`${numero} é ÍMPAR`);
}