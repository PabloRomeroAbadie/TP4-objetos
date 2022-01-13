//crea un objeto llamado auto que tenga algunas caracteristicas como color, marca, modelo y si esta encendido o apagado. crea los metodos necesarios para permitir encender y apagar el auto
let arranqueApagado = prompt ("si desea que el auto este encendido coloque on, caso contrario off")

let auto = {
    color: "rojo",
    marca: "toyota", 
    modelo: "yaris",

   encenderAuto(arranqueApagado){
       if (arranqueApagado === "on" || arranqueApagado === "ON") {
           document.write(arranqueApagado +" = el auto esta encendido")
       }else if (arranqueApagado === "off" || arranqueApagado === "OFF") {
        document.write(arranqueApagado +"= el auto esta apagado")
        
       }else{
           alert("ingrese on u off")
       }
   }
}

console.log(auto);
auto.encenderAuto(arranqueApagado);
