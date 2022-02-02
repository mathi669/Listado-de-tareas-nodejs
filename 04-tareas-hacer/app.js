require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    //establecer tareas
    tareas.cargarTareasFromArray( tareasDB );
  }
  

  //funcion do{} while () se ejecuta una vez y luego evalua una condicion y si la condicion siempre y cuando sea true
  // entonces vuelve a ejecutar el ciclo do - while. si se seleccion la opcion 0, este cumplirá la condicion de while  y terminará el programa.
  // si la condicion es diferente a '0' el programa repetirá constantemente el menú principal

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    guardarDB( tareas.listadoArr );

    await pausa();
  } while (opt !== "0");

  // pausa() nos sirve para que no se borre el menú una vez ingresada una opcion, por lo que en pocas palabras se repite el menu constantemente
};

main();