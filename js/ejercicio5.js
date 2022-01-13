/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de
nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona {
    constructor(nombre, edad, DNI, sexo , peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }

    mostrarGeneracion(){
        if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            document.write("<br>Pertenece a la Silent Generation: los niños de la posguerra y su rasgo caracteristico es la austeridad.<br>")
        }else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
            document.write("<br>Pertenece a la generacion Baby boom y su rasgo caracteristico es la ambicion.<br>")
    }else if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
        document.write("<br>Pertenece a la generacion x y su rasgo caracteristico es la obsesion por el exito.<br>")
    }else if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
        document.write("<br>Pertenece a la generacion Y millennials y su rasgo caracteristico es la frustracion.<br>")
    }else if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
        document.write("<br>Pertenece a la generacion Z y su rasgo caracteristico es la irreverencia.<br>")
    }
}

    esMayorDeEdad(){
        if(this.edad >= 18){
            document.write("<br>Es mayor de edad")
        }else{
            document.write("<br>Es menor de edad")
        }
    }

    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.DNI}
        <br>Sexo: ${this.sexo}
        <br>Peso: ${this.peso}
        <br>Altura: ${this.altura}
        <br>Año Nacimiento: ${this.nacimiento}`)
    }

    generaDni(){
        document.write(Math.floor(10000000 + Math.random() * 90000000)
        )
    }
}

let persona1 = new Persona ("mariano", 21, 38211205, "H", "85kg", "1,78cm",2000)

persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();
persona1.generaDni();