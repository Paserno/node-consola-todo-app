const Tarea = require('./tarea');
const colors = require('colors');
/**
 *  _listado:
 *          { 'uuid-123456798-1234565-3 : { id:12, desc:asd, compleadoEn:92231}}
 */

class Tareas {

    _listado = {};

    get listadoArr(){

        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        }) // Extraer cada llave de un objeto


        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id ){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = []){
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        // console.log(this.listadoArr);
        const listado2 = [];
        let i = 0;
        console.log();
        Object.keys( this._listado ).forEach( key => {
            i++;
            const tarea = this._listado[key];
            listado2.push( tarea );
            let {desc, completadoEn} = tarea;
            
            // let penCom = (completadoEn) 
            // ? console.log(colors.brightGreen(i), desc, '::'.brightMagenta,'Completado'.brightGreen )
            // : console.log(colors.brightGreen(i), desc, '::'.brightMagenta, 'Pendiente'.brightRed );
            let penCom = (completadoEn) 
                        ? 'Completado'.brightGreen
                        : 'Pendiente'.brightRed;
            console.log(colors.brightGreen(i), colors.brightWhite(desc), '::'.brightMagenta, penCom);
        });
    }
            
        
    listarPendientesCompledasas( completadas = true){
        console.log();
        let i = 0;
        this.listadoArr.forEach(tarea => {
            const {desc,completadoEn} = tarea;

            let penCom = (completadoEn) 
                            ? `${completadoEn}`.brightGreen
                            : 'Pendiente'.brightRed;

            if(completadoEn){
                if (completadas) {
                    i++;
                    console.log(`${colors.brightGreen( i + '.' )} ${colors.brightWhite(desc)} ${'::'.brightMagenta} ${penCom}`);
                    
                }
            }else{
                if (!completadas) {
                    i++;
                    console.log(`${colors.brightGreen( i + '.' )} ${colors.brightWhite(desc)} ${'::'.brightMagenta} ${penCom}`);
                }
            }
            // console.log(completadoEn, typeof(compleadoEn));
            
                
        });
    }

            
    toggleCompletadas( ids = []){

        ids.forEach(id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }

        });
        
    }   

}





module.exports = Tareas;