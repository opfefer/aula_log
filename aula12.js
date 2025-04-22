//criando nosso primeiro FOR

for (let i = 0; i < 100; I++){
    console.log(i)
}

//entregando os notebooks por ordem
const prompt = require('prompt-sync')();
console.log("Entregando notebooks")

for(let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o número ${nr}? `)
    let presente = prompt(`O(A) ${nome} veio para a escola? Digite S ou N: `)
    
    if(presente == 'S'){
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`Levar notebook até ${nome}`);
    }
    else{
     console.log(`Não pegar notebook para ${nome}`);
    }
}