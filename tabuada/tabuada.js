// Alunos: Giovani Tonet / Jean Perfoll

const argv = require('yargs').argv;

if (argv._[0]) {
    for (var i = 1, len = 10; i <= len; i++) {
        console.log(`${argv._[0]} x ${i} = ${argv._[0]*i}`);
    }
} else {
    console.log("Parâmetro não informado.");
}