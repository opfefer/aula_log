const prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o salário: '));

switch(true){
    case salario< 2000:
salario = salario + (salario * 0.12);
console.log(`Salário reajustado ${salario}`);
break;
    case salario >= 2000 && salario < 4000:
    salario = salario + (salario * 0.10);
    console.log(`Salário reajustado ${salario}`);
    break;
    case salario > 4000:
    salario = salario + (salario * 0.08)
    console.log(`Salário reajustado ${salario}`);
    break;
    default:
    console.log('Operação inválida');    
}