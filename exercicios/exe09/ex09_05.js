//Crie uma função que receba 2 números e o operador matemático para realizar a
//operação (Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **

function gerarSenha(tamanho) {
    let caracteres = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?"];
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    console.log(`Senha gerada: ${senha}`);
    return senha;
}
gerarSenha(10)
gerarSenha(16)