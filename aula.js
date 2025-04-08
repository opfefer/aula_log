const prompt =require('prompt-sync')()

//operação com variáveis
let nr1 = Number(prompt("Digite um numero?"));
let nr2 = Number(prompt("Digite um numero?"));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

//subtração
let subtracao = nr1 - nr2;
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

//divisão
let divisao = nr1 / nr2;
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

//multiplicação
let multiplicacao = nr1 * nr2;
console.log(`A multiplicacao entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

//exponenciacao
let exponenciacao = nr1 ** nr2;
console.log(`A exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

//calculando valor do celular com desconto
let valor = Number(prompt('Digite o valor do celular: '));
let desconto = Number(prompt('Digite o preço do desconto: '));

valor = valor - desconto;
console.log(`O valor do celular com desconto é R$${valor}`)

//calculando o dobro e a metade de um algoritmo
let numero = Number(prompt('Digite um número: '))

let dobro = numero * 2;

let metade = numero / 2;
console.log(`O dobro de ${numero} é ${dobro} e a metade é ${metade}`)

//definicao das variaveis
//horas por dia = 8;

var dias_totais = 15;
let horas_trabalho = horas_por_dia * dias_totais;
let custo_hora = 100;
let custo_total = horas_trabalho * custo_hora;

//exibir o resultado
console.log(custo_total);