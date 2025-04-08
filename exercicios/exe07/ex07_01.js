//Crie uma lista de filmes com 7 filmes e faça as seguintes operações com ela:
//Exiba apenas o primeiro o filme da lista
let filme = ["Rei Leão", "Branca de Neve", "Zootopia", "Frozen", "Cinderella", "Mulan", "Bela Adormecida", "A Pequena Sereia"]
console.log(filme)
//Exiba apenas o primeiro o filme da lista
console.log(filme[0])
//Exiba o filme da posição 4
console.log(filme[3]);

//Substitua o filme da última posição e exiba a lista
filme.splice(3, 0, "Enrolados")
//outra forma -> filme[3] = "Enrolados"
console.log(filme)

//Insira um novo filme no final da lista
filme.push("Bela e a Fera")
console.log(filme)

//Insira um novo filme na posição 5
filme[5] = "A Princesa e o Sapo"
console.log(filme)

//Exclua o primeiro filme
filme.shift()
console.log(filme)

//Exclua o último filme
filme.pop()
console.log(filme)

//Exiba os 3 primeiros filmes da lista
console.log(filme.slice(0.3))
console.log(filme)

//Exiba os 4 últimos filmes da lista
console.log(filme.slice(4.7))

//Exiba a quantidade de filmes atualmente na lista
console.log(filme);

//Ordene os filmes em ordem decrescente e exiba-os
filme.reverse()
console.log(filme)