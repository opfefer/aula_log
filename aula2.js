//Importando a biblioteca para entrada de dados
const prompt = require(`prompt-sync`)();

// Variaveis e constantes
// passo 1: receber o nome da pessoa
let nome
// passo 2: receber a idade da pessoa
let idade
// passo 3: receber o peso da pessoa
let peso
// passo 4: exibir nome, idade e peso
console.log('nome', 'idade', 'peso')

// receber e armazena o texto em uma variavel
    let curso   =   "Desenvolvimento de Sistemas"
// #tipo  nome  recebe  valor      na variavel

//Exibir o valor armazenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //Imprime o valor que esta na variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 15 //valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "Fernanda"

console.log("Olá", nome2, "você tem", idade2, "e hoje esta fazendo", temperatura, "C")

//Usando template
console.log(`Olá, ${nome2}, você tem ${idade2} e hoje está fazendo ${temperatura}C`)

let chovendo = false;
let dia = true;
//as constantes não podem ser reatribuidos novos valores
const PI = 3.1415
console.log(PI);

     //Utilizando prompt para receber dados
 //Entradada de dados

 //no prompt sempre recebemos uma string
nome = prompt(`Qual é seu nome? `)
idade = prompt(`Qual sua idade? `)

peso = parseFloat(prompt(`Qual seu peso ? `))
console.log(`Seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores é possivel editar
//calculos matematicos
console.log(idade + peso)