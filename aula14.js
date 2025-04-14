let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']

//a variavel x serve para iterar os valores ate o limite da lista
//o nome não é obrigatoriamente ser o nome i, x ou contador
//pode ser qualquer nome da variavel
for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves', 'Vieira']
//para cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}

//verificando se é uma consoante
//lista vogais
const prompt = require('prompt-sync')()
const vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ] 

let letra = prompt('Digite uma letra: ')
//se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console,log('É uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('Consoante');
}else{console.log('Não é uma letra')}

//obtendo a posição do item
for(let [pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja, a posição é a fruta
    console.log(`Posição ${pos} e fruta ${fruta}`)
}

//separando os itens da lista
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
let listaProdutos = produtos.split(',')
//o split divide a string e forma uma lista a partir do limita, no caso abaixo uma vírgula
for(let produtos of listaProdutos){
    console.log(produtos)
}

//percorrendo uma string como uma lista (de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}