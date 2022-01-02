var saludo:string="Bienvenidos a Argentina Programa";
console.log(saludo);

function modificarAcercaDe()
{
    let acercaDe:string=prompt("Ingresa el Acerca De") as string;
    (document.getElementById("acercaDe") as HTMLParagraphElement).innerHTML=acercaDe;
}

var persona={fullName:"Manuel Sadosky",position:"Desarrollador Frontend",
 ubication:"Tucumán(Argentina)"};

 (document.getElementById("nombre") as HTMLHeadElement).innerHTML=persona.fullName;
 (document.getElementById("perfil") as HTMLParagraphElement).innerHTML=persona.position;
 (document.getElementById("residencia") as HTMLParagraphElement).innerHTML=persona.ubication;