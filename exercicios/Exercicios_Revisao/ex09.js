//Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50
const prompt = require('prompt-sync')()

let i = 1;

while(i <= 50){
  if(i % 3 == 0){
    console.log(`${i}`);
  }
  i++;
}
