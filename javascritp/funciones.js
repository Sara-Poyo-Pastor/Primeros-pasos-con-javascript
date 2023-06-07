function saludar(nombre) {
    let mensaje = document.getElementById("saludo" ).textContent += nombre;
    console.log(mensaje);
    return "saludo"+ " " + nombre;
  }
saludar("Sara");

function sumar(a, b) {
    let resultado = a + b;
    console.log(resultado);
    resultado.textContent = resultado;
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