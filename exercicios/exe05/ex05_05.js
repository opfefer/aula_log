const prompt = require('prompt-sync')();
//Faça um programa que receba um número e mostre seu fatorial
//Ex. :5! = 5 * 4 * 3 * 2 * 1 = 120

let numero = parseInt(prompt("Digite um número: "))

let fatorial = 1
let i = numero;
let sequencia = numero = "! = " //concatenando valores

while(i >= 1){
    fatorial = fatorial * i;
    sequencia = sequencia + i;
    if(i > 1){
        sequencia = sequencia + ' * '
    }
    i--; //decrementando computador
}
sequencia = sequencia + " = " + fatorial;
console,log(sequencia)