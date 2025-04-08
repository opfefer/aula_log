const prompt = require('prompt-sync')();

//trabalhando com laços de repetição (while)

//executar o laço x vezes

let contador = 1;

//irá repetir enquanto a condição for verdadeira
//ou seja será verdade enquanto o contador for menor ou igual a 5
while(contador <= 5)
    console.log (`O contador é ${contador}`);
//incrementa a variavel ou seja adiciona valor a ela
//para que continua o processo ate que a condição seja atingida
contador = contador + 1
{
        console.log("Fim");
let senha_senai = '12345'
}

while(true){
    if(senha_senai = senha){
    let senha = prompt('Digite a senha: ');
    break;
}else if(senha == 'Desisto'){
    break;
    }

}

//escreva um programa que fique recebendo o valor de vários produtos 
// até que eu digite 0, 
// e exiba no final da soma da minha compra e a quantidade de produtos lidos

let soma2 = 0;
let qtd2 = 0;
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto: '));
    if (valor == 0){
    break;
}
else{
  soma2 = soma + valor;
  qtd2++;
  }
encerrar = prompt("Deseja continuar? (digite SUB-TOTAL");
}

console.log(`Foram informados ${qtd2}`);
//toFixed para colocar somente doi dígitos após a vírgula
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`);
