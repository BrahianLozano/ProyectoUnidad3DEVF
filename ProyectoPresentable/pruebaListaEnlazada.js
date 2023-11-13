class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Método para insertar al final de la lista
    insertarFinal(dato) {
        const nuevoNodo = new Nodo(dato);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let nodoActual = this.cabeza;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
        }
    }

    // Método para buscar un dato en la lista
    buscar(dato) {
        let nodoActual = this.cabeza;

        while (nodoActual) {
            if (nodoActual.dato.expediente === dato) {
                return nodoActual;
            }
            nodoActual = nodoActual.siguiente;
        }

        return null; // Retorna null si no se encuentra el dato
    }

    // Método para mostrar la lista
    mostrar() {
        let resultado = [];
        let nodoActual = this.cabeza;

        while (nodoActual) {
            resultado.push(nodoActual.dato);
            nodoActual = nodoActual.siguiente;
        }

        console.log(resultado.join(" -> "));
    }
}
class Alumno{
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, grupo, expediente){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.grupo = grupo;
        this.materias = [];
        this.expediente = expediente;
    }
}
//clase materia que va a ir dentro de alumno.materias
class Materia{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}


// Ejemplo de uso
const lista = new ListaEnlazada();
const alumno1 = new Alumno('Jose', 'Quintana', 'Diaz', 21, 'Grupo 3', 1);
const alumno2 = new Alumno('Juan', 'Quintana', 'Diaz', 19, 'Grupo 1', 2);
const alumno3 = new Alumno('Leo', 'Quintana', 'Diaz', 16, 'Grupo 2', 3);
const alumno4 = new Alumno('Pablo', 'Quintana', 'Diaz', 19, 'Grupo 3', 4);


lista.insertarFinal(alumno1);
lista.insertarFinal(alumno2);
lista.insertarFinal(alumno3);
lista.insertarFinal(alumno4);

//lista.mostrar(); // Salida esperada: jose, juan, leo, pablo

const datoBuscado = alumno3.expediente;
const nodoEncontrado = lista.buscar(datoBuscado);

if (nodoEncontrado) {
    console.log(`Se encontró el dato ${datoBuscado}`, nodoEncontrado);
} else {
    console.log(`No se encontró el dato ${datoBuscado}`);
}
