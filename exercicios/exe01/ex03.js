const prompt = require('prompt-sync')();

let numero = Number(prompt('digite o numero:'));
let dobro = (numero * 2);
let triplo = (numero * 3);
let elevado = (numero ** 3);
console.log(`o numero é ${numero} o seu dobro é ${dobro} o seu triplo é ${triplo} o seu valor elevado é${elevado}`);