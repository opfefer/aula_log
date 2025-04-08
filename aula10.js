const prompt = require('prompt-sync')();

//estrutura condicional aninhada
let idade = Number(prompt('Digite sua idade: '))

if(idade >= 18 && idade <= 70){
    console.log('Você é obrigado a votar');
}else{
    if(idade < 16){
        console.log('Você não pode votar');
    }else{
        if(idade >= 16 || idade > 70){
            console.log('Seu voto é facultativo');
        }
    }
}


//switch case estrutura de controle de fluxo para tomar decisões com base no valor de uma variavel
let n1 = Number(prompt('Digite o primeiro número: '))
let n2 = Number(prompt('Digite o segundo número: '))
let op = (prompt("Escolha sua operação (+, -, *, /, **"))

//testa o valor da variavelse é true
//usamos break para interromper o processo
//caso uma condição seja igual a um dos "cases" executará
switch(op){
    case'+':
    console.log(`Resultado: ${n1 + n2}`)
    break
    case'-':
    console.log(`Resultado: ${n1 - n2}`)
    break;
    case'*':
    console.log(`Resultado: ${n1 * n2}`)
    break;
    case'/':
    console.log(`Resultado: ${n1 / n2}`)
    break;
    case'**':
    console.log(`Resultado: ${n1 ** n2}`)
    break;
    default:
    console.log('Operador digitado inválido')
}

//verificar qual letra é igual
let letra = (prompt('Digite uma letra: ')).toUpperCase();
//quando usamos switch (variavel), o switch compara exatamente o valor da variavel
//com cases
switch(letra){
    case "A":
        case "E":
            case "I":
                case "O":
                    case "U":
                        console.log("Vogal")
                        break;
                        default:
                            console.log("consoante")
}