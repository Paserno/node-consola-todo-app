const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = ( data ) => {
    // metodo JSON.stringify convierte un objeto en su version valida de string.
    fs.writeFileSync( archivo, JSON.stringify(data) );
}


const leerDB = () => {
    
    if( !fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync( archivo, {encoding: 'utf-8'} );
    const data = JSON.parse( info );

    console.log(data);
    


    return data;
}


module.exports = {
    guardarDB,
    leerDB
}