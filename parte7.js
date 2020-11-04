const { ips } = require('./base');

// 250 - 255 25[0-5] -> vai pegar ips a partir de 250 à 255 e 25[de 1 a 5].
// 200 - 249 2[0-4][0-9]
// 100 - 199 1\d{2}
// 10 - 99 [1-9]\d
// 0 - 9 [\d]
// ^ -> Começa com
// $ -> Termina com

console.log(ips);

// const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;
// /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(ipRegExp));
// }

console.log(ips.match(ipRegExp));