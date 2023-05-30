/*declarar variables*/
let numero1 = 25;
let numero2 = 5;
let cadena1 = "casa";
let cadena2 = "arbol";
let bool1 = true;
let bool2 = false;

/*operaciones*/
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

/*concatenación*/
let lugar = cadena1 + " del " + cadena2;

/*funciones*/
function saludar(nombre) {
    let mensaje = document.getElementById("saludo") + "" + nombre;
    console.log(mensaje);
    return "saludo" + nombre;
  }
saludar("Sara");

function sumar(a, b) {
    let resultado = a + b;
    console.log(resultado);
    document.write(resultado);
  }
sumar(7, 5);

function Par_Impar(numero) {
    if (numero % 2 === 0) {
      let mensaje = numero + " es un número par";
      console.log(mensaje);
      document.write(mensaje);
    } else {
      let mensaje = numero + " es un número impar";
      console.log(mensaje);
      document.write(mensaje);
    }
  }
Par_Impar(6);
  
let carro = {
    marca: "Opel",
    color: "azul marino",
    año: 2018,
    puertas: 4,
    motor: {
      tipo: "V6",
      cilindros: 6,
      potencia: "120 hp"
    }
  };
  
  function obtenerMarcaCarro() {
    let marca = carro.marca;
    console.log("La marca del carro es: " + marca);
    document.write("<p>La marca del carro es: " + marca + "</p>");
    return marca;
  }
  
  function obtenerCantidadPuertas() {
    let puertas = carro.puertas;
    console.log("El carro tiene " + puertas + " puertas");
    document.write("<p>El carro tiene " + puertas + " puertas</p>");
    return puertas;
  }
  
  function obtenerAtributoMotor(atributo) {
    var valor = carro.motor[atributo];
    console.log("El atributo " + atributo + " del motor es: " + valor);
    document.write("<p>El atributo " + atributo + " del motor es: " + valor + "</p>");
    return valor;
  }
   
  obtenerAtributoMotor("tipo");
  
  // Arrays

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







