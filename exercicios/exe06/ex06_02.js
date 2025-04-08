//Gere os 6 números do sorteio da mega-sena de forma aleatória
let nr1, nr2, nr3, nr4, nr5, nr6;

for (let nrSorteio = 0; nrSorteio < 6; nrSorteio++){
    let nr = Math.floor(Math.random() * 60 + 1);

    let nrJaExiste = false
    
    if (nrSorteio > 0 && nr == nr1) nrJaExiste = true
    if (nrSorteio > 0 && nr == nr2) nrJaExiste = true
    if (nrSorteio > 0 && nr == nr3) nrJaExiste = true
    if (nrSorteio > 0 && nr == nr4) nrJaExiste = true
    if (nrSorteio > 0 && nr == nr5) nrJaExiste = true
    if (nrSorteio > 0 && nr == nr6) nrJaExiste = true

    if (nrJaExiste){
        if (nrSorteio == 0) nr1 = nr
        if (nrSorteio == 1) nr2 = nr
        if (nrSorteio == 2) nr3 = nr
        if (nrSorteio == 3) nr4 = nr
        if (nrSorteio == 4) nr5 = nr
        if (nrSorteio == 5) nr6 = nr
    } else {
        nrSorteio--
    }
}