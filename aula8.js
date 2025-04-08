const prompt = require('prompt-sync')();

let altura = Number(prompt('Digite sua altura: '));
let peso = Number(prompt('Digite seu peso: '));
let imc = peso /(altura ** 2);

if(imc < 18.5){
    console.log('abaixo do peso ideal');
}else if(imc >= 25 && imc < 25){
    console.log('peso ideal');
}else if(imc >= 25 && imc < 30){
    console.log('sobrepeso');
}else{
    console.log('obesidade');
}


//verificar se o triangulo é equilatero ou escaleno
//receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1: '))
//receber o lado 2
let lado2 = Number(prompt('Digite o valor do lado 2: '))
//receber o lado 3
let lado3 = Number(prompt('Digite o valor do lado 3: '))

//verificar se o triangulo é equilatero caso tenha todos os lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
//verificar se o triangulo é escaleno caso tenha todos os lados diferentes
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
//exibir como é o triângulo
console.log('Triângulo Equilátero ?', eq, 'Triângulo Escaleno', es);