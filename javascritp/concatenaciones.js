cadena1 = "camino";
cadena2 = "piedras";
let cadena3 = "largo";

let lugar = `El ${cadena1} de ${cadena2} es demasiado ${cadena3}`;
    console.log(lugar);
    document.getElementById("conca").textContent = lugar;

let lugar2 = `El ${cadena3} de ${cadena1} está lleno de ${cadena2}`;
    console.log(lugar2);
    document.getElementById("conca2").textContent += lugar2;