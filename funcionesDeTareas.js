/* controlador */
let fs = require('fs')
let tareas = require('./data/tareas.json');
let guardarJSON = (dato)=> fs.writeFileSync('./data/tareas.json',JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    todasLasTareas : tareas,
    listarTareas: () => tareas.forEach((tarea, i) => console.log(`# ${i+1} ---------------\n- TÍTULO: ${tarea.titulo.toUpperCase()} \n- ESTADO: ${tarea.estado.toLowerCase()} \n- CLASIFICACIÓN: ${tarea.clasificacion.toLowerCase()}\n\n`)),
    agregarTarea: (titulo, estado, clasificacion ) => {
        let nuevaTarea = {
            titulo,
            estado,
            clasificacion
        }
        tareas.push(nuevaTarea)
        guardarJSON(tareas)
        console.log('\nTu tarea fue creada con éxito!');
    },
    filtrarPorEstado: (estadoConsola) => {
       let filtro = tareas.filter((tarea) => tarea.estado.toLowerCase() === estadoConsola.toLowerCase())
       filtro.forEach((tarea, i) => {
           console.log(`# ${i+1} - ${tarea.titulo.toUpperCase()}`);
       })
    },
    borrar : (numeroTarea, cantidad) => {
        let index = numeroTarea - 1
        tareas.splice(index, cantidad)
        guardarJSON(tareas)},
    modificarEstado : (numeroTarea, nuevoEstado) => {
        let index = numeroTarea - 1
        let tarea = tareas[index]
        tarea.estado = nuevoEstado
        guardarJSON(tareas)},
    modificarClasificacion : (numeroTarea, nuevaClasificacion) => {
        let index = numeroTarea - 1
        let tarea = tareas[index]
        tarea.clasificacion = nuevaClasificacion
        guardarJSON(tareas)},
    listarForEstado : () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log(`# ${i+1} - ${tareas[i].titulo.toUpperCase()} se encuentra ${tareas[i].estado.toLowerCase()}`); 
        }
    },
    listarForClasificacion : () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log(`# ${i+1} - ${tareas[i].titulo.toUpperCase()} está clasificada como ${tareas[i].clasificacion.toLowerCase()}`); 
        }
    },
    ayuda : "\nHola Mundo! \nBienvenido a la version 2.0 de App Tarea\nEs tu primera vez acá? No te preocupes, acá va un poco de ayuda:\n \nPara VER todas tus tareas ingresa en consola - node app Listar -\n \nSi queres AGREGAR una tarea nueva, ingresa por consola - node app Agregar - seguido irá tu tarea a agregar (irá entre comillas si es más de una palabra), luego el estado actual de tu tarea y por último la clasificación que consideres útil. Das Enter y listo! Ya agregaste tu primera tarea, así de fácil. \nSi no quisieras llenar un campo podes poner un guión medio - o de lo contrario se llenará auto-\nmaticamente.\n \nHay una nueva función, se llama FILTRAR, está buenisima!\nPara usarla ingresa por consola -node app Filtrar- y seguido el estado por el que quieras filtrar tus tareas, listo! Aparecerá una lista de tus tareas con el filtro que pediste.\n \nSi querés BORRAR una tarea, ingresa por consola - node app Borrar - seguido el numero de tarea a eliminar y seguido cuántas tareas vas a eliminar (1 si es solo esa tarea, si deseas eliminar las que le siguen, indica cuantas tareas en total deseas eliminar). Siempre se eliminarán, luego de \nla primer tarea indicada aquellas que le sigan.\n\nAcá van otras dos nuevas funciones de nuestra actualizacion: \n- ModificarEstado \n- ModificarClasif\nAmbas funcionan igual, llamas -node app ModificarRespectivo - el número de tarea a modiciar, y el nuevo estado o clasificación que desees ingresar! Listo, ya modificaste tu tarea!\n \nEs importante que respetes mayúsculas y minúsculas en tu ejecución, si no, no funcionará. \n \nMuchas gracias por estar acá, disfruta de tu app ! <3"
}
