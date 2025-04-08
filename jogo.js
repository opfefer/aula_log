const prompt = require('prompt-sync')();

//crie um jogo de advinhação de números
//o computador precisa sortear um número aleatório com o Random
//e o usuário precisa digitar um número
//enquanto ele não acertar continua pedindo um novo número

console.log("##########################");
console.log("💭 JOGO DA ADVINHAÇÃO 💭");
console.log("##########################");

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um número aleatório
console.log(nrSorteado);

let acertou = false;

while(!acertou){
   const chute = parseInt(prompt('💫. Digite um número entre 1 e 100 para advinhar: '))

   if(chute > nrSorteado){
    console.log(`Você chutou ${chute}, tente um número 👇!`)
   }
   else if(chute < nrSorteado){
    console.log(`Você chutou ${chute}, tente um número 👆!`)
   }
   else if(chute == nrSorteado){
   console.log(`Você chutou ${chute}, 🎉 Parabéns você acertou!`)
    acertou = true;
   }
}

console.log('FIM')