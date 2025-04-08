const prompt = require('prompt-sync')();
//Ler do teclado a idade e o sexo de 10 pessoas, calcule e imprima:
//idade média das mulheres
//idade média dos homens
//idade média do grupo
let idade = 0
let sexo = 0
let mediaH
let qtdH
let mediaF
let qtdF
for(i = 0; i < 10; i++){
idade = Number(prompt('Digite a idade: '))
sexo = prompt('Digite o sexo: ').toUpperCase()

if(sexo == 'M'){
    mediaH += idade
    qtdH++;
}else {
    if(sexo == 'F')
    mediaF += idade
    qtdF++;
}
} 
console.log(`A média da idade dos homens: ${mediaH / qtdH}`)
console.log(`A média da idade das mulheres: ${mediaF / qtdF}`)