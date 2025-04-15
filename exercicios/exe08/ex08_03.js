//Crie uma lista com os meses e imprima apenas os meses que começam com "J"
const prompt = require('prompt-sync')()

const meses = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio','Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let letra = 'J'

for(let mes of meses){
    if(mes.includes(letra))
        console.log(mes)
}