//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
//10, chame essa função por 3 vezes enviando parâmetros diferentes

function tabuada(nr) {
    console.log(`Tabuada do ${nr}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${nr} x ${i} = ${nr * i}`);
    }
    console.log('')
}
tabuada(2);
tabuada(5);
tabuada(7);