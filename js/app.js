"use strict";
var saludo = "Bienvenidos a Argentina Programa";
console.log(saludo);
function modificarAcercaDe() {
    let acercaDe = prompt("Ingresa el Acerca De");
    document.getElementById("acercaDe").innerHTML = acercaDe;
}

var persona = { fullName: "Manuel Sadosky", position: "Desarrollador Frontend",
    ubication: "Tucumán(Argentina)" };

document.getElementById("nombre").innerHTML = persona.fullName;
document.getElementById("perfil").innerHTML = persona.position;
document.getElementById("residencia").innerHTML = persona.ubication;
