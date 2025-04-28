//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
//10, chame essa função por 3 vezes enviando parâmetros diferentes

function ExibirTabuada(numero){
    console.log(`Tabuada do ${numero}: `)
    for(let i = 0; i <= 10; i++)
        console.log(`${numero} X ${i} = ${numero * i}`)
}
ExibirTabuada(2)
ExibirTabuada(5)
ExibirTabuada(8)