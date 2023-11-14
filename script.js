//nuestra poderosisima estructura dee datos
var Alumnos = []
//variable para poder distinguir materias al momento de eliminar la materia desde el boton de eliminar
let numeroDeMateria = 1;


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





//clase alumno



class Alumno{
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, grupo){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.grupo = grupo;
        this.materias = [];
    }

}
//clase materia que va a ir dentro de alumno.materias
class Materia{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}
console.log('el script esta conectado al html')//prueba de que el script se conecta al html
const form = document.getElementById("formularioCompleto"); //se obtiene el formulario por su id
//lo que tiene que hacer el programa al presionar el boton registrar
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //obtenemos los datos del alumno del formulario
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

    GuardarDatos(Alumnos); // guardar en localstorage los datos del alumno
    formularioCompleto.reset();
    console.log(Alumnos)
})

//----------------------------------------------------------------------------------

//para insertar cada materia en el alumno en registro.



function insertarMaterias(Alumno){
    const elementoPadre = document.getElementById('EspacioMaterias'); //se obtiene el div main
    const inputsMateria = elementoPadre.querySelectorAll('.input-materia'); //Se obtiene la cantidad de divs que hay dentro del div main
    inputsMateria.forEach((input, index) =>{ //se recorre cada materia registrada en el alumno.
        const nombreMateria = input.querySelector('.nombre-materia').value; //se obtine y se guarda la materia registrada
        const calificacionMateria = input.querySelector('.calificacion-materia').value; //se obtiene y se guarda la calificacion en cada materia
        console.log(`la materia ${nombreMateria} con calificacion ${calificacionMateria} ha sido registrada correctamente!`)// console.log para comprobar que se obtuvo bien la materia
        let nuevaMateria = new Materia(nombreMateria, calificacionMateria); // se ingresan la materia y calificacion en una materia 
        Alumno.materias.push(nuevaMateria); //se agrega la materia a las materias del alumno
    });
    return Alumno 
}
//funcion para agragar materia cada que se presiona el boton para agregar materias
function agregarMateria(){
    const EspacioMaterias = document.getElementById("EspacioMaterias"); // se obtiene el div main
    const inputMateria = document.createElement("div"); // se crea el div para la materia que se quiera agregar
    inputMateria.classList.add("input-materia"); //se asigna una clase al div
    inputMateria.id = `input-materia${numeroDeMateria}`; //se asigna un id para identificar la materia al momento de querer borrarla
    //se inyecta el html para registrar materia y calificacion junto con boton para eliminar la materia si se agregaron espacios de mas.
    inputMateria.innerHTML =  `
        <label for="materia">Materia:</label>
        <input type="text" class="nombre-materia" placeholder="Escribe la materia aquí...">
        <label for="calificacion">Calificacion:</label>
        <input type="number" name="calificacion" class="calificacion-materia" placeholder="Escribe tu calificacion...">
        <button onclick="eliminarMateria(this)">-</button>
    `
    EspacioMaterias.appendChild(inputMateria); //se agrega la materia al div main de las materias
    numeroDeMateria++; //se cambia el id de la materia para identificarlas correctamente.
}

//funcion para eliminar el espacio creadoo agregar materia con el boton '-'
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

//---------------------------------------------------------------------------------------------------------



//