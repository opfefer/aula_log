//programando a dinamica da criptografia

let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let segredo = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

function criptografar(texto){
    let resultado = '';
    for(let letra of texto){
        let posicao = alfabeto.indexOf(letra)
        resultado += segredo[posicao]
    }
    return resultado
}
console.log(criptografar('SENAI'))


function descriptografar(texto){
    let resultado = '';
    for(let letra of texto){
        let posicao = segredo.indexOf(letra)
        resultado += alfabeto[posicao]
    }
    return resultado
}

console.log(descriptografar('VHQDL'))