const fs = require('fs');
const colors = require('colors');

//primera forma 
const crearArchivo = (base = 5, condicion, final) => {
    
    return new Promise ((resolve, reject) => {

        //me pemrite antes de corre el porgrama, limpia la consola
        console.clear();
        console.log('=================================='.green);
        console.log('Tabla del : ', colors.blue(base));
        console.log('=================================='.green);

        let salida = '';

        for (let i = 1; i <= final; i++) {

            const num = base*i;
            salida+=`${base} * ${i} = ${num}\n`;
            
        }

        if (listar(condicion)) {
            console.log(salida);
        }
        

        //si yo no coloco la ruta o el path, me toma por defecto la ruta en donde se esta ejecutando el archivo
        //este metodo acepta cualquier entrada para almacenar
        //el calbback sera la funcion que se ejecute cuando todo lo del fs se ejecuta, se dispara con el error
        /*fs.writeFile(`tabla del ${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`tabla del ${base} creada`);
        });*/

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base} fue creada`);

    })


}

const listar = (condicion) => {

    if (condicion) {
        return true;
    } else {
        return false
    }
}

//segunda forma de por si el async y el await retornan una promesa 
const crearArchivo2 = async (base = 5) => {

    try {
        //me pemrite antes de corre el porgrama, limpia la consola
        console.clear();
        console.log('==================================');
        console.log('Tabla del : ', base);
        console.log('==================================');

        let salida = '';

        for (let i = 1; i < 11; i++) {

            const num = base*i;
            salida+=`${base} * ${i} = ${num}\n`;
                
        }

        console.log(salida);

        //si yo no coloco la ruta o el path, me toma por defecto la ruta en donde se esta ejecutando el archivo
        //este metodo acepta cualquier entrada para almacenar
        //el calbback sera la funcion que se ejecute cuando todo lo del fs se ejecuta, se dispara con el error
        /*fs.writeFile(`tabla del ${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`tabla del ${base} creada`);
        });*/

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

    

}

//colocamos lo que queremos exportar
module.exports = {
    //esto es igual a: crearArchivo: crearArchivo
    crearArchivo
};