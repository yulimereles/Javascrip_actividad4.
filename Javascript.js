//1° Ejercicio

function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
}

//Ejemplo1
console.log(esMayorEdad(20)); // Devuelve true
//Ejemplo2
console.log(esMayorEdad(16)); // Devuelve false

//2° Ejercicio

function calcularAreaRectangulo (base , altura){
    let  area = base * altura;
    return area
}

//Ejemplo1
console.log(calcularAreaRectangulo(15, 20)) // devuelve 300
//Ejemplo2 
console.log(calcularAreaRectangulo(3, 7)); // Devuelve 21

// 3° Ejercicio
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}

//Ejemplo1
console.log(esPalindromo("radar")); // Devuelve true
//Ejemplo2
console.log(esPalindromo("hola")); // Devuelve false

// 4° Ejercicio
function generaNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}

//Ejemplo1
console.log(generaNumeroAleatorio()); // Devuelve un número aleatorio entre 1 y 10
//Ejemplo2
console.log(generaNumeroAleatorio()); // Devuelve otro número aleatorio entre 1 y 10