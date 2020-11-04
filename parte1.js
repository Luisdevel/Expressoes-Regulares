// g - global (encontra todas as ocorrências)
// i - insensitive
// () - encontra grupos
// | - ou

const { texto } = require('./base');

const regExp1 = /(maria|joão|Luis)(, hoje sua esposa)/i; // Procurando Maria ou João ou Luis dentro do texto
const found = regExp1.exec(texto);

if (found) { 
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[0]);
}