let numeros = [5, 8, 3, 2, 9, 6, 1, 4, 12, 15, 7];
document.getElementById("array"). textContent += "Los elementos de mi array son: " + numeros.join(", ");

function imprimirNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
imprimirNumeros(numeros);

function añadirNumero(array, numero) {
  array.push(numero);
  console.log("El número nuevo es: ", array);
  document.getElementById("nuevoNumero").textContent = "El array con el número nuevo añadido es: " + array.join(", ");
}
añadirNumero(numeros, 25);
añadirNumero(numeros, 90);

function eliminarNumerosPares(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
    array.splice(i, 1);
    }
  }
  console.log("El array después de eliminar los números pares es: " + array);
  document.getElementById("eliminarPares").textContent += "El array después de eliminar los números pares es: " + array.join(", ");
}
eliminarNumerosPares(numeros);

function obtenerNumeroMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  let mensaje = "El número mayor del array es: " + mayor;
  console.log(mensaje);
  document.getElementById("numeroMayor").textContent += mensaje;
  return mayor;
}
obtenerNumeroMayor(numeros);

function obtenerNumeroMenor(array) {
  var menor = array[0];
  for (var i = 1; i < array.length; i++) {
  if (array[i] < menor) {
    menor = array[i];
    }
  }
  let mensaje = "El número menor del array es: " + menor;
  console.log(mensaje);
  document.getElementById("numeroMenor").textContent += mensaje;
  return menor;
}
obtenerNumeroMenor(numeros);

function convertirEnMinusculas(texto) {
  let textoMinusculas = texto.toLowerCase();
  document.getElementById("minusculas").textContent += textoMinusculas;
  return textoMinusculas;
}
convertirEnMinusculas("LA CASA DE MI ABUELO ESTÁ MUY LEJOS");

function convertirEnMayusculas(texto) {
  let textoMayusculas = texto.toUpperCase();
  
  document.getElementById("mayusculas").textContent += textoMayusculas;
  return textoMayusculas;
}
convertirEnMayusculas("la casa de mi abuelo está muy lejos");

function convertirPrimeraLetraMayuscula(nombres) {
  let nombresConvertidos = [];
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let primerLetra = nombre.charAt(0).toUpperCase();
    let restoDelNombre = nombre.slice(1);
    let nombreConvertido = primerLetra + restoDelNombre;
    nombresConvertidos.push(nombreConvertido);
  }
  document.getElementById("primeraMayuscula").textContent += nombresConvertidos.join(", ");

  return nombresConvertidos;
}
var nombres = ["pablo", "marta", "ángel", "verónica"];
console.log(convertirPrimeraLetraMayuscula(nombres));
