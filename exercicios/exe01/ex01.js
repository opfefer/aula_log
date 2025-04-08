const prompt = require('prompt-sync')();

//progama que lê dois numeros e faz a soma
let nr1 = Number(prompt("Digite um numero?"));
let nr2 = parseFloat(prompt("Digite o segundo numero?"));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)