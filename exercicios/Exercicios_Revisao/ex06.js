//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um
//algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7 * altura) – 58 Para mulheres: (62.1 * altura) - 44.7, 
// exiba qual é o peso ideal da pessoa

const prompt = require('prompt-sync')()

let alturaM = Number(prompt('Digite sua altura: '))
let pesoM = Number(prompt('Digite seu peso: '))

let imc = pesoM /(alturaM ** 2);

if(imc < 44.7){
    console.log('abaixo do peso ideal')
}else if(imc >= 44.7 && imc < 44.7){
    console.log('peso ideal')
}else if(imc >= 44.7 && imc < 44.7){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}
//////////////////////////////////////////////////////
let alturaH = Number(prompt('Digite sua altura: '))
let pesoH = Number(prompt('Digite seu peso: '))

let imcH = pesoH /(alturaH ** 2);

if(imc < 58){
    console.log('abaixo do peso ideal')
}else if(imcH >= 58 && imcH < 58){
    console.log('peso ideal')
}else if(imcH >= 58 && imcH < 58){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}

