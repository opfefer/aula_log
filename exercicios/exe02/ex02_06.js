//Ler dois números inteiros e informar se estes são iguais ou diferentes
const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite outro número: '));

if(numero1 == numero2){

console.log("Os números são iguais");
}
else{
    console.log("Os números são diferentes");
}