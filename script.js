<<<<<<< Updated upstream
Alumnos = []
=======
<<<<<<< Updated upstream
=======
var Alumnos = [];
//----------------------------------------------------------------------------------
function CargarDatos(){

if (localStorage.getItem("DatabaseAlumnos")){

   Alumnos = JSON.parse( localStorage.getItem("DatabaseAlumnos") );
   }else{
    console.log('no hay datos guardados')
   }
}
//----------------------------------------------------------------------------------
CargarDatos();

//----------------------------------------------------------------------------------
function GuardarDatos(datosAlumnos){

   localStorage.setItem("DatabaseAlumnos", JSON.stringify(datosAlumnos));

}
//----------------------------------------------------------------------------------

>>>>>>> Stashed changes
class Alumno{
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, grupo){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        //Preguntar al sensei
        // this.alta = alta;
        this.grupo = grupo;
        this.materias = [];
    }
<<<<<<< Updated upstream
=======

    
>>>>>>> Stashed changes
}
class Materia{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}

//prueba de que el script se conecta al html
console.log('el script esta conectado al html')
//se obtiene el formulario por su id
const form = document.getElementById("formularioCompleto");
//lo que tiene que hacer el programa al presionar el boton registrar
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //obtenemos los valores del formulario
    let nombre = document.getElementById('PrimerNombre').value;
    let apellidoPaterno = document.getElementById('ApellidoPaterno').value;
    let apellidoMaterno = document.getElementById('ApellidoMaterno').value;
    let edad = document.getElementById('Edad').value;
    let grupoSeleccionado = document.getElementById('grupoSeleccionado').value;
    //creamos un alumno con los valores del formulario
    let nuevoAlumno = new Alumno(nombre, apellidoPaterno, apellidoMaterno, edad, grupoSeleccionado);
    //registramos materias del alumno.
    insertarMaterias(nuevoAlumno);
    console.log('Alumno registrado: ', nuevoAlumno);
    //debemos comprobar si existen materias y si es asi, debemos de registrar todos los inputs.
    Alumnos.push(nuevoAlumno);
<<<<<<< Updated upstream

    formularioCompleto.reset();
    console.log(Alumnos)
})


=======
    // guardar en localstorage los datos del alumno
    GuardarDatos(Alumnos);

    formularioCompleto.reset();
    console.log(Alumnos)

})

//----------------------------------------------------------------------------------
>>>>>>> Stashed changes
function insertarMaterias(Alumno){
    //se obtiene el div main
    const elementoPadre = document.getElementById('EspacioMaterias');
    //Se obtiene la cantidad de divs que hay dentro del div main
    const numeroElementosHijos = elementoPadre.children.length;
    //prueba de que si se consiguio la cantidad de divs dentro del div main
    console.log(`Numero de Materias por Alumno: ${numeroElementosHijos}`);
    //iteracion para registrar cada materia dentro del alumno ingresado
    for(let i = 1; i <= numeroElementosHijos; i++){
        insertarMateria(i, Alumno)
    }
    return Alumno;
}
function insertarMateria(i, Alumno){
    //se ingresa en una variable el valor del input NombreMateria
    let NombreMateria = document.getElementById(`NombreMateria${i}`).value;
    //se ingresa en una variable el valor del input de la calificacion
    let CalificacionMateria = document.getElementById(`calificacion${i}`).value;
    //prueba de que se obtuvo la materia y la calificacion de cada div registrado
    console.log('La materia ',NombreMateria, ' con calificacion ', CalificacionMateria, 'ha sido registrada correctamente')
    //se crea el objeto Materia junto con el nombre de la materia y la calificacion.
    let NuevaMateria = new Materia(NombreMateria, CalificacionMateria);
    Alumno.materias.push(NuevaMateria);
    return Alumno;
}
//indice para distinguir el id de cada materia
let numeroDeMateria = 1;
//funcion para crear espacio para agregar otra materia con el boton '+'
function agregarMateria(){   
    //metodo para agregar inputs al html
    //se selecciona el elemento donde vamos a meter todas las materias 
    const EspacioMaterias = document.getElementById("EspacioMaterias");
    //creamos un div unico para cada materia dentro del elemento
    const inputMateria = document.createElement("div")
    //le asignamos nombre para identificar a cada div 
    inputMateria.id = `materia${numeroDeMateria}` 
    //inyectamos el html para registrar cada materia dentro del div unico para cada materia
    inputMateria.innerHTML = `
        <label for="materia">Materia:</label>
        <input type="text" id="NombreMateria${numeroDeMateria}" placeholder="Escribe la materia aquí...">
        <label for="calificacion">Calificacion:</label>
        <input type="number" name="calificacion" id="calificacion${numeroDeMateria}" placeholder="Escribe tu calificacion...">
        <button onclick="eliminarMateria(this)">-</button>
    `;
    //agregamos la materia al div de las materias
    EspacioMaterias.appendChild(inputMateria);
    //se aumenta el indice que se usara en el nombre de la id de la materia
    numeroDeMateria++
};
//funcion para eliminar el espacio creado para agregar materia materia con el boton '-'
function eliminarMateria(button){
    //muy posiblemente se puede simplificar mas este codigo...
    //se obtiene el elemento completo, el div del boton
    let materia = button.parentNode;
    //se obtiene el id del elemento completo
    let idMateria = materia.id; 
    //se obtiene el elemento por el id de donde se quiere eliminar
    let materiaPorEliminar = document.getElementById(idMateria);
    //se elimina el elemento por el id de la materia
    materiaPorEliminar.parentNode.removeChild(materiaPorEliminar);
<<<<<<< Updated upstream
}
=======
}


//--------------------            BUSCAR ALUMNO          -------------------------------------------------

function buscarAlumno(){ //buscar por nombre ó apellidos
   // console.log('no hay alumnos en tu escuela :(')
    let ListaAlumnosRegistrados = []; 
    let FindNombre = document.getElementById('FindName').value
    
   //  borrar los divs que contienen los nombres de los alumnos encontrados para hacer nueva lista
   const elementDiv = document.getElementById("EspacioDetallesAlumno");
   while (elementDiv.firstChild) {
       elementDiv.removeChild(elementDiv.firstChild);
   }
   //----------------------------------------------------------------------   

 if (Alumnos.length > 0 && FindNombre != undefined)  {

    for(let i = 0; i < Alumnos.length; i++){
        if( (Alumnos[i].nombre == FindNombre) // buscar solo por nombre
          || (FindNombre == Alumnos[i].nombre + ' ' + Alumnos[i].apellidoPaterno) // buscar por nombre y un apellido
          || (FindNombre == Alumnos[i].nombre + ' ' + Alumnos[i].apellidoPaterno + ' ' + Alumnos[i].apellidoMaterno) // buscar por nombre completo
          || (FindNombre == Alumnos[i].apellidoPaterno + ' ' + Alumnos[i].apellidoMaterno )// buscar por apellidos
          || (FindNombre == Alumnos[i].apellidoPaterno) // buscar por  apellido paterno
          || (FindNombre == Alumnos[i].apellidoMaterno) // buscar por  apellido materno
          
          )
          {  
          
            ListaAlumnosRegistrados.push(Alumnos[i])
            DetallesAlumno(Alumnos[i].nombre + ' ' + Alumnos[i].apellidoPaterno + ' ' + Alumnos[i].apellidoMaterno)
            //return ListaAlumnosRegistrados;
            
          }else{console.log('alumno no registrado')}
    }
       console.log(ListaAlumnosRegistrados)
 }else{console.log('no hay alumnos en tu escuela :(')}

    return null;

}
//-------    agregar contenido al html si encuentra alumnos
function DetallesAlumno(alumno){



// crear divs "a"  para vincular a cada alumno a una seccion de detalles
const espacioDetallesAlumno = document.getElementById('EspacioDetallesAlumno')
const detallesAlumno = document.createElement("div");
//le asignamos nombre para identificar a cada div 
detallesAlumno.id = "DetallesAlumno";
detallesAlumno.innerHTML = `<a href="">${alumno}</a>`
espacioDetallesAlumno.appendChild(detallesAlumno);


  


}







//---------------------------------------------------------------------------------------------------------

//  sacar un promedio de un grupo

function PromedioGrupal(){
    let ListaGrupo1 = [];
    let ListaGrupo2 = [];
    let ListaGrupo3 = [];

    // hacemos tres listas de los tres grupos
    if (Alumnos.length > 0 )  {
        for(let i = 0; i < Alumnos.length; i++){
            if (Alumnos[i].grupo == 'grupo 1'){

                ListaGrupo1.push(Alumnos[i])
            }else if (Alumnos[i].grupo == 'grupo 2'){
                ListaGrupo2.push(Alumnos[i])
            }else if (Alumnos[i].grupo == 'grupo 3'){
                ListaGrupo3.push(Alumnos[i])
            }

          
        }
    }


    if (ListaGrupo1.length > 0){
        ListaGrupo1.sort((a, b) => a - b)
    }

    console.log('miembros del grupo 1:',ListaGrupo1)
    console.log('miembros del grupo 2:',ListaGrupo2)
    console.log('miembros del grupo 3:',ListaGrupo3)

}

PromedioGrupal()
//console.log(grupoSeleccionado.value)







>>>>>>> Stashed changes
>>>>>>> Stashed changes
