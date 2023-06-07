 // Array de 10 números
 var numeros = [5, 8, 3, 2, 9, 6, 1, 4, 12, 10];

 // Función para imprimir en consola todos los números de un array
 function imprimirNumeros(array) {
   for (var i = 0; i < array.length; i++) {
     console.log(array[i]);
   }
 }
 
 // Función para añadir un número al array
 function añadirNumero(array, numero) {
   array.push(numero);
 }
 
 // Función para eliminar los números pares del array
 function eliminarNumerosPares(array) {
   for (var i = array.length - 1; i >= 0; i--) {
     if (array[i] % 2 === 0) {
       array.splice(i, 1);
     }
   }
 }
 
 // Función para obtener el número mayor de un array
 function obtenerNumeroMayor(array) {
   var mayor = array[0];
   for (var i = 1; i < array.length; i++) {
     if (array[i] > mayor) {
       mayor = array[i];
     }
   }
   return mayor;
 }
 
 // Función para obtener el número menor de un array
 function obtenerNumeroMenor(array) {
   var menor = array[0];
   for (var i = 1; i < array.length; i++) {
     if (array[i] < menor) {
       menor = array[i];
     }
   }
   return menor;
 }
 
 // Función para convertir en minúsculas todas las letras de un texto
 function convertirEnMinusculas(texto) {
   return texto.toLowerCase();
 }
 
 // Función para convertir en mayúsculas todas las letras de un texto
 function convertirEnMayusculas(texto) {
   return texto.toUpperCase();
 }
 
 // Función para convertir la primera letra de cada nombre en mayúscula
 function convertirPrimeraLetraMayuscula(nombres) {
   var nombresConvertidos = [];
   for (var i = 0; i < nombres.length; i++) {
     var nombre = nombres[i];
     var primerLetra = nombre.charAt(0).toUpperCase();
     var restoDelNombre = nombre.slice(1);
     var nombreConvertido = primerLetra + restoDelNombre;
     nombresConvertidos.push(nombreConvertido);
   }
   return nombresConvertidos;
 }
 
 // Ejemplos de uso de las funciones
 imprimirNumeros(numeros);
 añadirNumero(numeros, 11);
 eliminarNumerosPares(numeros);
 console.log("El número mayor es: " + obtenerNumeroMayor(numeros));
 console.log("El número menor es: " + obtenerNumeroMenor(numeros));
 console.log(convertirEnMinusculas("TEXTO EN MINÚSCULAS"));
 console.log(convertirEnMayusculas("texto en mayúsculas"));
 var nombres = ["juan", "maría", "pedro"];
 console.log(convertirPrimeraLetraMayuscula(nombres));