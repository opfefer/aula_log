const prompt = require('prompt-sync')();
//Utilizando o comando FOR, exiba todos os números ímpares, de 1 a 40

for (let nr = 1; nr <= 40; nr++){
   if(nr % 2 != 0)
    console.log(nr)
}