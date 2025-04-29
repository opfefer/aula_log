//Faça um algoritmo que pergunte quanto você ganha por hora e o 
// número de horas trabalhadas no mês. Calcule em uma nova variável 
// e mostre o total do seu salário no referido mês

const prompt = require('prompt-sync')()

let dinheiro = Number(prompt('Quanto dinheiro você ganha por hora? '));
let nrHoras = Number(prompt('Quantas horas você trabalha no mês? '));

dinheiro = dinheiro * nrHoras

console.log(`Você ganha no total ${dinheiro} por mês`)