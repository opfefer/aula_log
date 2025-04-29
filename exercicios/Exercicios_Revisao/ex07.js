//Faça um Programa que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que
//são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça
//um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o
//salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:
//+ Salário Bruto: R$
//- IR (11%): R$
//- INSS (8%): R$
//- Sindicato (5%): R$
//= Salário Liquido: R$
//Obs.: Salário Bruto - Descontos = Salário Líquido.
const prompt = require('prompt-sync')()

let salario = Number(prompt("Digite seu salário: "))
let horas = Number(prompt("Digite o número de horas trabalhadas no mês: "))

let salarioMes = salario * horas
let IRPF = salario * 11 / 100
let INSS = salario * 8 / 100
let sindicato = salario * 5 / 100
let salarioLiquido = salario - IRPF - INSS - sindicato

console.log(`Salário total: ${salarioMes}, Total IRPF: ${IRPF}, Total INSS: ${INSS}, Total sindicato: ${sindicato}, Total salário líquido: ${salarioLiquido}`)
