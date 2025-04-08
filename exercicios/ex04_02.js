const prompt = require('prompt-sync')();
//Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence
//considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)
let anoAtual = parseInt(prompt('Digite o ano atual: '))
let anoNasc = parseInt(prompt('Digite o ano de nascimento: '))
let idade = anoAtual - anoNasc

switch(true){
// validar se idade é menor de 18
    case idade < 10:
    console.log("Você é criança")
    break
    //validar se é maior de 11
case  idade >= 11 && idade <= 17:
    console.log("Você é adolescente")
break;
//validar se é maior de 18
  case idade > 18 && idade < 59:
    console.log("Você é adulto")
break;
//validar se é mais de 60
  case idade >= 60:
  console.log("Você é idoso")
  break;
  default:
    console.log("Idade inválida")
}