//Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
//função que receba o valor a ser convertido e imprima a conversão em dólar e em euro

var dolar = 5.66
var euro = 6.43
var real = 100
function valorConvertido(){
    dolar = dolar * real
    console.log(`O valor convertido em dólar é: ${dolar}`)
    euro = euro * real
    console.log(`O valor convertido em euro é: ${euro}`)
}
valorConvertido(100)