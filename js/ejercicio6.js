/*Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el
método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
    constructor(isbn, titulo, autor, numeroPaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    mostrarLibros(){
        document.write(`<br>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} paginas.<br>`)
    }


    get mostrarIsbn(){
        return this.isbn;
    }

    get mostrarTitulo(){
        return this.titulo;
    }

    get mostrarAutor(){
        return this.autor;
    }

    get mostrarNumeroPaginas(){
        return this.numeroPaginas;
    }
    
    set modificarIsbn(nuevoIsbn){
        this.isbn = nuevoIsbn;
    }

    set modificarTitulo(nuevoTitulo){
        this.isbn = nuevoTitulo;
    }

    set modificarAutor(nuevoAutor){
        this.isbn = nuevoAutor;
    }

    set modificarNumeroPaginas(nuevoNumero){
        this.isbn = nuevoNumero;
    }
}

let libroQuienSeHaLlevadoMiQueso = new Libro ("978-950-788-026-1", "¿Quien se ha llevado mi queso?", "Spencer Johnson,MD.",106);

let libroLasVocesDelDesierto = new Libro ("995-987-609-115-3","Las voces del desierto", "Marlo Morgan", 79);

libroQuienSeHaLlevadoMiQueso.mostrarLibros();
libroLasVocesDelDesierto.mostrarLibros();

if(libroQuienSeHaLlevadoMiQueso.numeroPaginas > libroLasVocesDelDesierto.numeroPaginas){
    document.write("<br> El libro: ¿Quien se ha llevado mi queso? tiene mas paginas.")
}else{
    document.write("<br> El libro: Las voces del desierto tiene mas paginas")
};