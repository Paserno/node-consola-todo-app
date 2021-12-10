require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmarBorrar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {


    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB ){ // Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    

    do {
        // console.clear()
        // Imprimir el Menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                // console.log(tareas._listado);
                break;
            case '3': // List Completada
                tareas.listarPendientesCompledasas(true);
            break;
            case '4': // List Pendiente
                tareas.listarPendientesCompledasas(false);
            break;
            case '5': // Completado | Pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas(ids);
            break;
            case '6': //Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0'){
                    const confirmar = await confirmarBorrar('Está Seguro?');
                    if(confirmar){
                      tareas.borrarTarea(id);
                       console.log('Tarea Borrada!')
                    }
                }
            break;

        }

        guardarDB(tareas.listadoArr); 

        await pausa();


    } while (opt !== '0');


    // 

}


main();


