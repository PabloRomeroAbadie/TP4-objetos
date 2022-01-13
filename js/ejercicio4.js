// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las
// propiedades código, nombre y precio, además del método imprime datos, el cual escribe por
// pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres
// objetos instanciados.

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<br>Codigo: ${this.codigo} 
        <br>Nombre: ${this.nombre}
        <br>Precio: ${this.precio} <br>`)
    }
}

let productos = [];

let celularMotorola = new Producto ("176977E142827", "MOTOROLA MOTO G20 XT2128-1 AZUL", "$29.999,00");
let celularLg = new Producto ("176869E142383","LG K61 TITANIUM",": $31.999,00")
let celularSamsung = new Producto ("177183E143743","SAMSUNG GALAXY A12 - SM -A127M NEGRO","$30.999,00")

productos.push(celularMotorola);
productos.push(celularLg);
productos.push(celularSamsung);

for(let i = 0; i < productos.length; i++){
 productos[i].imprimeDatos();
}