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