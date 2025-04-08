const prompt = require(`prompt-sync`);

console.log("Bem vindo ao curso Java Script!")
console.log("Estou aprendendo a usar o console.log!");

console.log(15 + 25);
//Exercicio de variaveis

let nomeAluno = "Fernanda"
let altura = "167"
let escola = "sesi"
let ano = "2 A"

console.log("Olá",nomeAluno, "você tem", altura, "de altura", "estuda na escola", escola, "e está no", ano)

// 2 exercicio
let nomeProfessor = "Ricardo"
let materia = "senai"
let anoIngresso = "2022"
console.log("O professor", nomeProfessor, "trabalha na área", materia, "e ingressou no ano de", anoIngresso)
// 3 exercicio
nomeAluno = prompt(`Digite o nome do aluno? `)
altura = parseFloat(prompt(`Digite a altura? `))
escola = prompt(`Digite o nome da escola? `)
ano = parseInt(prompt(`Digite o ano da turma? `))
console.log("Olá",nomeAluno, "você tem", altura, "de altura", "estuda na escola", escola, "e está no", ano)

