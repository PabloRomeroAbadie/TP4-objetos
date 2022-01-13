// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades
// de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
// calcular el perímetro y el área

class rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    
    mostrarDatos(){
        document.write(`<br>Alto: ${this.alto}
        <br>Ancho: ${this.ancho}`)
    }

    perimetro(){
        let perimetro = 2 * (this.alto + this.ancho)
        return perimetro
    }

    area(){
        let area = this.ancho * this.alto
        return area 
    }
    
}   

let rectanguloGrande = new rectangulo(40, 80)
rectanguloGrande.mostrarDatos()
document.write("<br>Perimetro: "+ rectanguloGrande.perimetro())
document.write("<br>Area: "+ rectanguloGrande.area())


let rectanguloMediano = new rectangulo(30, 50)
rectanguloMediano.mostrarDatos()
document.write("<br>Perimetro: "+ rectanguloMediano.perimetro())
document.write("<br>Area: "+ rectanguloMediano.area())

let base = parseInt(prompt("ingrese la base del rectangulo"))
let altura = parseInt(prompt("ingrese la altura del rectangulo"))

let rectanguloUsuario = new rectangulo(altura,base)
rectanguloUsuario.mostrarDatos()
document.write("<br>Perimetro: "+ rectanguloUsuario.perimetro())
document.write("<br>Area: "+ rectanguloUsuario.area())