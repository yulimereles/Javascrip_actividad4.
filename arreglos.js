//1° Ejercicio

function obtenerSuma(arreglo){
    let suma = 0;
    
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

//devuelve la suma de todos los arreglos 
 console.log(obtenerSuma(2,4,6,8,10)) //suma todos los numeros: da un total -> 30.
