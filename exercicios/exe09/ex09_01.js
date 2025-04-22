//criar função com o nome FormatarData, que recebapor parâmetro o dia,  mês e ano e retorne
//ela no formato 'dia/mes/ano', chame ela 3 vezes passando valores diferentes

function FormatarData(dia, mes, ano){
    let data = `${dia}/${mes}/${ano}`
    return data
}

let valorRetornado = FormatarData(30,3,2009)
console.log(valorRetornado)