//"bodega", el usuario tiene una bodega con variedad de vinos, de tipos y de años, separado por sectores dependiendo su antiguedad. El programa lo ayudara a encontrar el vino que busca, y si quiere, también agregar otro vino a su colección y registrarlo.
//vinos 2000 a 2012 sector 1 ,2013 a 2020 sector 2, 2021 a 2025 sector 3.

//array de objetos con los elementos de la bodega 
let vinos = [
    {nombre:"Lindaflor Malbec", año: 2017, sector:2},
    {nombre:"Trivento Eolo", año: 2019, sector:2},
    {nombre:"Doña Paula", año: 2002, sector:1},
    {nombre:"Gran Lurton", año:2017, sector:2},
    {nombre:"Escarlata Malbec", año:2013, sector:2},
    {nombre:"El Enemigo Malbec", año:2011, sector:1},
    {nombre:"Ánimal Colors ",año:2024, sector:3},
    {nombre:"Inconsciente Merlot" ,año:2023, sector:3},
    {nombre:"Trivento Stratus", año:2021, sector:3},
    {nombre:"Toro", año:2025, sector:3}
]
//funcion para agregar a la bodega nuevos vinos
function agregarVino(){
    let nombreVino = prompt("ingresar nombre del vino");
    let tiempoVino = prompt("ingresar año del vino");
    let añoVino = parseInt(tiempoVino);
    if(añoVino <= 2012){
        vinos.push({nombre: nombreVino , año: añoVino , sector:1});
    }
    else if (añoVino <= 2020){
        vinos.push({nombre: nombreVino , año: añoVino , sector:2});
    } else
        vinos.push({nombre: nombreVino , año: añoVino , sector:3});

}

//funcion para encontrar el vino por su nombre

function encontrarVino() {
    let vinoEncontrado = null;
    do {
        const nombreVino = prompt("¿Desea buscar algún vino en especial? Dime el nombre, si no, di 'no'");
        if (nombreVino === "no") {
            console.log("Búsqueda cancelada.");
            console.log(vinos);
            break;
        }
        vinoEncontrado = vinos.find(vino => vino.nombre.toLowerCase() === nombreVino.toLowerCase());
        if (vinoEncontrado) {
            alert(`Vino encontrado: ${vinoEncontrado.nombre} (Año: ${vinoEncontrado.año}, Sector: ${vinoEncontrado.sector})`);
            break;
        } else {
            alert("Vino no encontrado. Intenta con otro nombre.");
            console.log("Vino no encontrado. Intentando nuevamente...");
        }
    } while (true);
}


//bloque de pregunta al usuario si quiere agregar vinos, elegir, o mirar toda su colección
let agregar = "";

do {
    const agregar = prompt("¿usted desea agregar un vino a la bodega?  si/no")

if (agregar.toLowerCase() === "si"){
    console.log("agregaremos un vino");
    agregarVino();
    
}
else if (agregar.toLowerCase() === "no"){
    console.log("miraremos la colección de vinos");
    encontrarVino();
    break;
}
else {
    console.log("ERROR, por favor ingresar 'si' o 'no'")
}
} while(agregar.toLowerCase() !== "si" && agregar.toLowerCase() !== "no"){
}
