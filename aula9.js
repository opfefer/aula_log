const prompt = require('prompt-sync')();

//descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('Total de horas trabalhadas: '))
let vendas = Number(prompt('Total de horas vendas: '))

//validar se uma das condições foi atendida (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if (vendas > 5000 || horas > 40){
    console.log("Tem direito ao bônus")

}
else{
    console.log("Não tem direito ao bônus")
}

//crie um algoritmo que receba um caractere e verifique se é uma vogal ou uma consoante
let letra1 = Number(prompt('Digite uma letra: '))
    if (letra1 == "a" || letra1 == "e" || letra1 == "i" || letra1 == "o" && letra1 == "u")
        {
    console.log(`a letra ${letra} é uma vogal`);
}
else{
    console.log(`a letra ${letra} é uma consoante`);
}
