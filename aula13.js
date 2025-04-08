//declarando um novo vetor
//reconheço que é um vetor pelo uso dos colchetes -> []
let listaVazia = [];
console.log(listaVazia)

//declarar lista de números
let numeros = [1,2,3,4,5,6]
console.log(numeros);

//declaraçãode uma lista de strings
let nomes = ["Ana", "João", "Maria"];
console.log(nomes);

//declaração de uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["coca-cola", "Cachorro- Quente"],
    [5.0, 10.0]
]
console.log(listaComLista)

//alterando valores da lista
let frutas = ['Maçâ', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)
frutas.push('Laranja')
console.log(frutas)

//spread adiciona um novo elemento na lista
frutas = [...frutas, 'Banana']
console.log(frutas);

//a função splice adiciona um novo item em uma posição especifica
//a partir de um valor no indice
frutas.splice(2, 0, 'Morango')
console.log(frutas)

//excluindo item da lista
frutas.splice(3,1) //excluindo item pelo indice
console.log(frutas)
frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excluindo ultimo item da lista
console.log(frutas)

//acessar os itens da lista
console.log(frutas[3]); //acesso a partir de uma posição específica
console.log(frutas.slice(0.4)) //posição 0 até 4
console.log(frutas.slice(1)) // a partir da posição 1
console.log(frutas.slice(-1)) //mostra os itens do fim da lista
console.log(frutas.length); //total de itens na lista

//ordenar itens da lista
console.log(frutas)
frutas.sort() //ordenar lista de ordem crescente
console.log(frutas)
frutas.reverse() //ordenando de forma decrescente
console.log(frutas)