//Peça dois números ao usuário e mostre qual o maior e qual o menor
const prompt = require('prompt-sync')()

//pedir os números
let nr1 = Number(prompt('Digite um número: '));
let nr2 = Number(prompt('Digite um número: '));

//verificar se os números são maiores ou menores
if(nr1 > nr2){
   
//exibir resultado
console.log("O número é maior");
}else{
console.log("O número é menor");
}