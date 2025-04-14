//Crie uma lista com os meses e imprima apenas os meses que começam com "J"
const prompt = require('prompt-sync')()

const meses = ['Fevereiro', 'Março', 'Abril', 'Maio', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesesJ = ['Janeiro', 'Junho', 'Julho']

let mes = prompt('Digite um mês para imprimir: ')
if(mesesJ.includes(mes.toLowerCase())){
    console,log(`Meses com J: ${mesesJ}`)
}else if(meses.includes(mes.toLowerCase())){
    console.log('Não é mês com J')
}