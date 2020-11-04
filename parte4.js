const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy pega tudo o que tem dentro
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy