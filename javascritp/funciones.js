function saludar(nombre) {
  let saludo = "¡Hola, " + nombre + "!";
  console.log(saludo); 
  document.getElementById("saludo").innerHTML += saludo + "<br>";
}
saludar("Sara");
saludar("Manu");
saludar("María");



function sumar(a, b) {
    let resultado = a + b;
    console.log(resultado);
    document.getElementById("operacion").innerHTML += resultado + "<br>";
  }
sumar(7, 5);
sumar(8, 6);



function par_Impar(numero) {
    if (numero % 2 === 0) {
      let mensaje = numero + " es un número par";
      console.log(mensaje);
      document.getElementById("parImpar").innerHTML += mensaje + "<br>";
    } else {
      let mensaje = numero + " es un número impar";
      console.log(mensaje);
      document.getElementById("parImpar").innerHTML += mensaje + "<br>";
    }
  }
par_Impar(6);
par_Impar(19);
