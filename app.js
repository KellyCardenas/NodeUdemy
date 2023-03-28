
const argvs = require('./config/yargs');
const { options } = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();


console.log(process.argv);

//node app.js --base=4
//{ _: [], base: 4, '$0': 'app.js' }
console.log(argvs);

//node app.js --base=4 --listar
//{ _: [], base: 4, listar: true, '$0': 'app.js' }

//base: yargs 4
console.log('base: yargs', argvs.base);

crearArchivo(argvs.b, argvs.l, argvs.f)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));















/*
//para obtener argumentos por consola 
//'/Users/kelly_cardenas_salazar/.nvm/versions/node/v16.19.0/bin/node',
// '/Users/kelly_cardenas_salazar/Dev/Cursos/NodeUdemy/03-bases-node/app.js'
//el primer argumento en donde se encunetra la app de node instalada de manera global y el segundo donde se encuentra ejecutada
console.log(process.argv);

//obtenego el tercer argumento
const[ , , arg3 = 'base = 5'] = process.argv;

//obtenemos solo el valor del argumento
const [ , base] = arg3.split('=');

console.log(base);

//const base = 5;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));*/