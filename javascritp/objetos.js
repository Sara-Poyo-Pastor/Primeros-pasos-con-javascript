let coche = {
    marca: "Opel",
    color: "azul marino",
    año: 2018,
    puertas: 4,
    motor: {
      tipo: "gasolina",
      cilindros: 8,
      potencia: "120 caballos"
    }
  };
  
  function obtenerMarca() {
    let marca = coche.marca;
    console.log(marca);
    document.getElementById("marcaCoche").innerHTML += "La marca del coche es: " + marca;
    return marca;
  }
  obtenerMarca();

  function obtenerNumeroPuertas() {
    let puertas = coche.puertas;
    console.log("El coche tiene " + puertas + " puertas");
    document.getElementById("numeroPuertas").innerHTML += "El coche tiene " + puertas + " puertas";
    return puertas;
  }
  obtenerNumeroPuertas();

  function obtenerAtributo(atributo) {
    var anidado = coche.motor[atributo];
    console.log("El atributo " + atributo + " del motor es: " + anidado);
    document.getElementById("atributo").innerHTML += "El atributo " + atributo + " del motor es: " + anidado + "<br>";
    return anidado;
  }
  
  obtenerAtributo("tipo");
  obtenerAtributo("cilindros");
