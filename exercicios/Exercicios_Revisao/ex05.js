//Ex05.js - Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra
//escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido

const prompt =require('prompt-sync')()

let genero = prompt('Digite seu gênero: ')

if(genero == 'F'){
    console.log('Feminino')

}
else if(genero == 'M'){
    console.log('Masculino')
}else{
    console.log('Gênero inválido')
}
    