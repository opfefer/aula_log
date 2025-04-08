const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Qual é o 1° numero?'));
let nota2 = Number(prompt('Qual é o 2° numero?'));
let media = (nota1 + nota2)/2;
console.log(` a média das notas ${nota1} e ${nota2} é de ${media}`)
