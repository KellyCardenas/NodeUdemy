const argvs = require('yargs')
                .option('b', {
                    //este alias me indica que la b de arriba y base es lo mismo
                    alias: 'base',
                    //me indica que el valor que recibe es tipo numerico
                    type:'number',
                    //me indica que si o si le debe llegar un numero
                    demandOption: true,
                    //describe la ppiedad
                    describe: 'Es la base de la tabla de multiplicar'
                }).option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    //valor por defecto
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('f',{
                    alias: 'fin',
                    type: 'number',
                    default: 10,
                    describe: 'Coloca el limite de los numeros a multiplicar'
                })
                .check((argvs, options) => {
                    if (isNaN(argvs.base)) {
                        throw 'La base tiene que ser un número';
                    }
                    return true
                })
                .argv;

//como solo es eso, entonces lo exporto sin llaves, de esta menra
module.exports = argvs;


//node app --help