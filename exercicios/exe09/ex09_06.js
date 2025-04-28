//Crie uma função que gere uma senha aleatória, deve receber como parâmetro a
//quantidade de caracteres que terá a senha, crie uma lista com todos os caracteres disponíveis
//para a senha e com o random sorteie a qual de dígitos terá a senha

function gerarSenha(tamanhoSenha){

        let caracteres = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?"];
        let senha = "";
    
        for (let i = 0; i < tamanho; i++) {
            let letraSorteada = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[letraSorteada]
        }
    
        console.log(`Senha gerada: ${senha}`)

        return senha;
    }
    console.log('Senha de 6 caracteres: ', gerarSenha(10))
    console.log('Senha de 6 caracteres: ', gerarSenha(6))