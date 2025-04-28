//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas
var contador = 0
function nrContado(){
    contador = contador + 1
    console.log(`O número foi contado ${contador} vez`)
}

nrContado()