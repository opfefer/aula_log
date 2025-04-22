const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ")
let nota1 = Number(prompt(`Qual sua primeira nota: `))
let nota2 = Number(prompt(`Qual sua segunda nota: `))
let media = (nota1 + nota2) / 2

if(media >= 7){
    console.log(`Olá ${nome }, você foi aprovado! Com média ${media} `)
}
else if(media > 5 || media < 7){
    console.log(`Olá ${nome}, você está em recuperação! Com média ${media} `)
}
else{
    console.log(`Olá ${nome}, você foi reprovado! Com média ${media} `)
}