/* vista, es lo que el cliente manipula o maneja*/
let {todasLasTareas, listarTareas, agregarTarea, filtrarPorEstado, borrar, modificarEstado, modificarClasificacion, listarForEstado, listarForClasificacion,ayuda} = require('./funcionesDeTareas');
let {argv} = require('process');

let titulo = argv[3];
let estado = argv[4];
let clasificacion = argv[5];



switch (argv[2]) {
    case 'Listar': 
    console.log(`Listado de tareas \n------------------`);
    listarTareas(); 
    console.log('\n');
        break;
    case 'Agregar': 
    if(titulo !== undefined && estado !== undefined){
        agregarTarea(titulo, estado, clasificacion); 
        console.log('\n');
    } else if(titulo !== undefined && estado === undefined ){
        estado = 'Pendiente'
        clasificacion = 'No especificada'
        agregarTarea(titulo, estado, clasificacion);
    }else if (titulo === undefined){
        console.log('\nSi no definís un título no puedo crear tu tarea :(\n');
    }
        break;
    case 'Filtrar': 
    if (titulo === 'Pendiente' || titulo === 'Terminada'){
        console.log(`\nLas tareas ${titulo.toLowerCase()}s son:\n--------------------------`);
        filtrarPorEstado(titulo);
        console.log('\n');
    } else if(titulo === 'En proceso'){
        console.log(`\nLas tareas ${titulo.toLowerCase()} son:\n--------------------------`);
        filtrarPorEstado(titulo)
        console.log('\n');
    }else{
        console.log('\nPor favor, ingrese alguno de estos estados por consola: \n- Pendiente \n- Terminada \n- "En proceso"');
        console.log('\n');
    };
    break;
    case 'Borrar':
        
            console.log(`\nLa tarea #${titulo} fue borrada con éxito!`);
            borrar(titulo, estado) ;
        
        break;
    case 'ModificarEstado':
        console.log(`\nEl estado de la tarea #${titulo} fue modificado con éxito!\n`);
            modificarEstado(titulo, estado);
        break;
    case 'ModificarClasif':
        console.log(`\nLa clasificación de la tarea #${titulo} fue modificado con éxito!\n`);
            modificarClasificacion(titulo, estado);
        break;
    case 'Estado': 
    listarForEstado() ; 
        break;
    case 'Clasificación': 
    listarForClasificacion() ; 
        break;
    case 'Ayuda': 
    console.log(ayuda) ; 
        break;
    case undefined:
        console.log('\nAtención! Tenés que pasar una acción. \n Las acciones disponibles son: \n- Listar \n- Agregar \n- Filtrar \n- Borrar \n- ModificarEstado \n- ModificarClasif\n- Estado \n- Clasificación \n- Ayuda \n \nSi querés limpiar la consola ingresa -clear-');
        break;
    default:
        console.log('\nNo entiendo que queres hacer :( \n Las acciones disponibles son: \n- Listar \n- Agregar \n- Filtrar \n- Borrar \n- ModificarEstado \n- ModificarClasif\n- Estado \n- Clasificación \n- Ayuda \n \nSi querés limpiar la consola ingresa -clear-');
        break;
};