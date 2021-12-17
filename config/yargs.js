const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Número base a multiplicar'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Mostrar listado'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Número límite superior'
    })
    .check((argv, options) => {
        console.log(argv.l);
        if(isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        if(isNaN(argv.h)) {
            throw 'El límite debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;