//calcule a média e imprima aprovado ou reprovado (para ser aprovado a média deve ser no mínimo 7)
const prompt = require('prompt-sync')();

//receber as notas dos alunos
let nota = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
//calcular a media
let media = (nota + nota2)/2
if(media >= 7){
    console.log('Você foi aprovado');
}else{
    console.log('Você foi reprovado');
}