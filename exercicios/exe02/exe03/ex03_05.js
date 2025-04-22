const prompt = require('prompt-sync')();

let salario = Number(prompt("Digite seu salário: "))

if(salario <= 2000){
    //salario = salario * 0.12;
    let reajuste = salario * 0.12;
    salario = salario + reajuste
    salario = salario + (salario * 0.12);
    console.log(`Salario reajustado em 12%, o valor total é: ${salario}`);

}

else if(salario <= 2000 || salario <= 4000){
    //salario = salario * 0.12;
    let reajuste = salario * 0.12;
    salario = salario + reajuste
    salario = salario + (salario * 0.12);
    console.log(`Salario reajustado em 10%, o valor total é: ${salario}`);

}
else{
    //let reajuste = salario * 0.12;
    //salario + salario = reajuste
    salario = salario = (salario * 0.08);
    console.log(`Salario reajustado em 8%, o valor total é: ${salario}`)
}