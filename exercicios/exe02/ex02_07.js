const prompt = require('prompt-sync')();
//Receba a velocidade do carro
//exiba que foi multado se for maior que 80km/h
//o valor da multa será R$ 7,00 por cada km excedido
let velocidade = Number(prompt('Digite a velocidade: '));

if(velocidade > 80){
    console.log('Você foi multado!');
    let multa = (velocidade - 80) * 7;
    console.log(`O valor da multa é: ${multa}`)
    
}


