const prompt = require('prompt-sync')();

let ano = Number(prompt('Digite o ano atual: '))
let anoNasc = Number(prompt('Digite o ano de nascimento: '))
let idade = ano - anoNasc

if (ano == 2025);
if (idade <= 10){
    console.log('Você é criança')
}
else if (idade >= 11 && idade < 17){
    console.log('Você é adolescente')
}
else if (idade > 18 && idade <= 59){
    console.log('Você é adulto')
}
else if (idade >= 60){
    console.log('Você é idoso')
}
