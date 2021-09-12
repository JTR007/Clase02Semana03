
// Geometrizador
let result;
let radio = prompt("Inserte radio del circulo");

const calculaCircunferencia = (radio) => {
    result = 2 * Math.PI * radio;
    return document.write(`La circuferencia es: ${result}<br>`);
  }

const calculaArea = (radio) => {
    result = radio * radio * Math.PI;
    return document.writeln(`El area es: ${result}<br>`);
}

calculaCircunferencia(radio);
calculaArea(radio)

// La calculadora de la edad del cachorro

const calculateDogAge = (dogAge) => {
    
    let calculate = dogAge * 7;	
    let mensaje_resul = "Tu perro tiene " + calculate + " años en años perro";
  
    return mensaje_resul;
  
}

let dogAge = prompt("Introdusca la edad de la mascota: ");

document.write(calculateDogAge(dogAge));