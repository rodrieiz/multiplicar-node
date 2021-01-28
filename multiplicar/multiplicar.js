// Requireds

const { error } = require('console');
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un número')
            return
        }
        if (!Number(limite)) {
            reject('El límite no es un número')
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        })

    })
}

let listarTabla = (base, limite = 10) => {

    console.log("######## Imprimiendo tabla ########".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla

}