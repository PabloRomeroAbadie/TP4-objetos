// //2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ● Una propiedad titular con el valor "Alex".
// ● Una propiedad saldo, teniendo como valor inicial 0.
// ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad
// como parámetro
// ● Un método extraer() que permita retirar la cantidad pasada como parámetro.
// ● Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la
// descripción del estado de la cuenta.


let deposito = parseInt(prompt("ingrese cantidad de dinero a depositar"));
let extraccion = parseInt(prompt("ingrese la cantidad de dinero a extraer"));


class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresarDinero(deposito){
        this.saldo = this.saldo + deposito;
    }
    

    extraccionDinero(extraccion){
        this.saldo = this.saldo - extraccion;
    }

    mostrarInforme(){
     document.write("Saldo actual: "+this.saldo)
    }
    
}

let Usuario = new Cuenta ("Alex",0);
Usuario.ingresarDinero(deposito);
Usuario.extraccionDinero(extraccion);
Usuario.mostrarInforme();


