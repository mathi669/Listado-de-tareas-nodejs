// const { resolve } = require("path");

// require("colors");

// const mostrarMenu = () => {

//   return new Promise( resolve => {

//     console.clear();
//     console.log("=========================".green);
//     console.log(" Seleccione una opción ".green);
//     console.log("=========================\n".green);
  
//     console.log(`${"1.".green} Crear una tarea`);
//     console.log(`${"2.".green} Listar tareas`);
//     console.log(`${"3.".green} Listar tareas completadas`);
//     console.log(`${"4.".green} Listar tareas pendientes`);
//     console.log(`${"5.".green} Completar tarea(s)`);
//     console.log(`${"6.".green} Borrar tarea`);
//     console.log(`${"0.".green} Salir\n`);
  
//     const readline = require("readline").createInterface({
//       input: process.stdin, //El programa espera informacion o accion del usuario
//       output: process.stdout, //Muesra mensaje en consola de cada accion del usuario
//     });
  
//     readline.question("Seleccione una opción: ", (opt) => {
//       readline.close();
//       resolve(opt);
//     }); // pregunta opciones y responde al usuario, cuando ya no se usa, se cierra la aplicacion.
//   })

// };

// //funcion para pausar la aplicacion 
// // const pausa = () => {

// //   return new Promise( resolve => {

// //     const readline = require("readline").createInterface({
// //       input: process.stdin,
// //       output: process.stdout,
// //     });
  
// //     readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
// //       readline.close();
// //       resolve(opt);
// //     });
// //   })
// // };

// module.exports = {
//   mostrarMenu
//   // pausa
// };
