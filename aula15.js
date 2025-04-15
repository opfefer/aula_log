const prompt = require('prompt-sync')()
Cabecalho('SESI/SENAI')
//criando nossa primeira função
function Cabecalho(texto){
    console.log('--------------------------')
    console.log(texto)
    console.log('--------------------------')
}

//criando outra função, função de saudação
function Saudacao(){
    let nome = prompt('Digite seu nome: ')
    console.log(`${nome}, tenha um bom dia.`)
}

//chamando a função 
//passando o parâmetro junto com a função
Cabecalho('SESI/SENAI')
//posso declarar uma variavel e passa-la como parametro para função
let escola = 'Sesi 025'
Cabecalho()
Saudacao()

//criei a função soma que irá receber dois valores como parâmetro
//a partir desses valores, realizará o cálculo e mostrará o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
Soma(5, 6)
Soma(8, 9)
Soma(8, 18)

//      EXERCICIO
//Crie uma função com o nome ParImpar que receba por parâmetro que receba um numero
//e verifique se esse numero é par ou impar
//chame essa função 2 vezes com números diferentes

function ParImpar(numero){
    if(numero % 2 == 0)
        console.log('É par')
    else{
        console.log('É ímpar')
    }
}
ParImpar(2)
ParImpar(5)

//função com retorno da chamada
//o cálculo é realizado e é retornada para a chamada da função
function Media(n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}

console.log(Media(6,8))