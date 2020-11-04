const { alfabeto } = require('./base');

// [abc] -> COnjunto [^] -> Negação
// [0-9]

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));
console.log(alfabeto.match(/\w+/g)); // é a mesma coisa que console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/\W/g)); // Todo o que não for letra ou número ou _
console.log(alfabeto.match(/\d+/g)); // é a mesma coisa que console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/\D/g)); // Tudo menos os digitos
console.log(alfabeto.match(/\D+/g)); // Conjunto letra por letra
console.log(alfabeto.match(/\s+/g)); // todos os espaços
console.log(alfabeto.match(/\S+/g)); // Pega tudo menos os espaços