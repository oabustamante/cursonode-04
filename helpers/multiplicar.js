const fs = require('fs');
/*
crearArchivo = (base = 5) => {
    let result = '';

    console.log('====================');
    console.log(' Base: ', base);
    console.log('====================');

    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${base} = ${ i * 5}`);
        result += `${i} x ${base} = ${ i * 5}\n`;
    }

    fs.writeFileSync(`Tabla-${base}.txt`, result);
    console.log(`Tabla del ${base} creada.`);
}
*/

crearArchivo = async(base = 5) => {
    try {
        let result = '';

        console.log('====================');
        console.log(' Base: ', base);
        console.log('====================');
    
        for(let i = 1; i <= 10; i++) {
            result += `${i} x ${base} = ${ i * 5}\n`;
        }
    
        console.log(result);

        fs.writeFileSync(`Tabla-${base}.txt`, result);
        return `Tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
    
}
/*
crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {
        let result = '';

        console.log('====================');
        console.log(' Base: ', base);
        console.log('====================');
    
        for(let i = 1; i <= 10; i++) {
            console.log(`${i} x ${base} = ${ i * 5}`);
            result += `${i} x ${base} = ${ i * 5}\n`;
        }
        try {
            fs.writeFileSync(`Tabla-${base}.txt`, result);
            resolve(`Tabla-${base}.txt`);
        } catch(err) {
            reject(`Error al crear la Tabla del ${base}.\nError: `, err);
        }
    });
}
*/

crearArchivoListar = async(base = 5, lista = false, hasta = 10) => {
    try {
        let result = '';

        for(let i = 1; i <= hasta; i++) {
            result += `${i} x ${base} = ${ i * base}\n`;
        }

        if(lista) {
            console.log('====================');
            console.log(' Base: ', base);
            console.log('====================');
            console.log(result);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, result);
        return `Tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo,
    crearArchivoListar
}
