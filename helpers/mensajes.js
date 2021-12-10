require('colors');

    


const mostrarMenu = () => {

return new Promise(resolve => {

        console.clear();
        console.log('=========================='.brightGreen);
        console.log('  Seleccionar una Opcion  '.brightGreen);
        console.log('=========================='.brightGreen);

        console.log(`${'1'.brightMagenta}. Crear una Tarea`);
        console.log(`${'2'.brightMagenta}. Listar Tareas`);
        console.log(`${'3'.brightMagenta}. Listar Tareas Completadas`);
        console.log(`${'4'.brightMagenta}. Listar Tareas Pendiente`);
        console.log(`${'5'.brightMagenta}. Completar Tarea(s)`);
        console.log(`${'6'.brightMagenta}. Borrar Tarea`);
        console.log(`${'0'.brightMagenta}. Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin, // node pausa la ejecucion con stdin
            output: process.stdout
        });

        readline.question('Seleccione una Opcion: ', (option) => {
            readline.close();
            resolve(option);
        })
    });
}

const pausa = () => {

    return new Promise(resolve => {



        const readline = require('readline').createInterface({
            input: process.stdin, // node pausa la ejecucion con stdin
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar...\n`, (option) => {
            readline.close();
            resolve();
        })
    })
}




module.exports = {
    mostrarMenu,
    pausa
}