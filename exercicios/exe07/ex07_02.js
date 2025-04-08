const prompt = require('prompt-sync')();
//Crie uma lista com os 20 times do campeonato brasileiro de futebol
let time = ["Atlético Mineiro",
    "Atlético Paranaense",
    "Bahia",
    "Botafogo",
    "Bragantino",
    "Cuiabá",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude","Palmeiras",
    "São Paulo",
    "Vitória",
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio"
]

//Exiba o primeiro time da lista como campeão
console.log(time[0])

//Exiba os 4 primeiros times como que irão jogar a libertadores
console.log(time.slice(0,4))

//Exiba os 4 últimos times como os que estão rebaixados para a série B
time.slice(16,20)