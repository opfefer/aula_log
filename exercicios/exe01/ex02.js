const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um numero: '))


console.log(`O antecessor do numero ${numero} é ${numero - 1}`)
console.log(`O sucessor do numero ${numero} é ${numero + 1}`)