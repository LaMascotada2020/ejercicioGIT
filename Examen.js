var numero1 = 5;
var numero2 = 8;
if(numero2>numero1) {
console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
console.log("numero2 es positivo");
}
if(numero1<0 || numero1 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(++numero1 <= numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor oigual que numero2");
}


console.log('****************************');


let factorizar = 5;
let resultado =1;
let j;

for(j=1; j <= factorizar;j++){

    resultado*=j;

}

console.log('El factorial de ' + factorizar + ' es: ' + resultado);



console.log('****************************');



function parametro(entero) {

  let salida;
  let valor;


    if (entero % 2 == 0) {

        salida = " Es par";
    
      } else {
    
        salida = " Es impar";
    
      }
    
  return salida;


}

valor= 55;

console.log(valor + parametro(valor));



console.log('****************************');


function palindromo(Expresion) {
   
     const newExpresion = Expresion.replace(/[\W_]/g, "").toLowerCase()
     const LimpiarCadena = newExpresion.split("").reverse().join("")
  
    return newExpresion === LimpiarCadena ? "es palindromo" : "no es palindromo"
  }
  
  console.log(palindromo("la ruta nos aporto otro paso natural")) // es palindromo


console.log('****************************');



class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    obtDetalles() {
      console.log(this.nombre);
      console.log(this.edad);
    }
  }
  
  const objPersona = new Persona("Joaquin", 88);
  objPersona.obtDetalles();
  
  class Estudiante extends Persona {
    calificacion;
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  }
  
  class Profesor extends Persona {
    asignatura;
    nivel;
    constructor(nombre, edad, asignatura = "JS", basico = "básico") {
      super(nombre, edad);
      this.asignatura = asignatura;
      this.nivel = basico;
    }
  
    obtDetalles() {
      console.log(this.asignatura);
      console.log(this.nivel);
      console.log(this.nombre);
      console.log(this.edad);
    }
  }

  
  class Grupo {
    profesor = [];
    promedio = 0;
    estudiantes = [];
  
    constructor(profesor, estudiantes) {
      this.profesor = profesor;
      this.estudiantes = estudiantes;
    }
  
    obtDetalles() {
      console.log("Profesores :" + this.profesor);
      console.log("Estudiantes :" + this.estudiantes);
    }
  
    calificar() {
      for (let i = 0; i < this.estudiantes.length; i++) {
        this.estudiantes[i] = Math.random() * 10;
      }
      console.log(this.estudiantes);
    }
  
    obtPromedio() {
      let suma = 0;
      for (let i = 0; i < this.estudiantes.length; i++) {
        suma += this.estudiantes[i];
      }
      this.promedio = suma / this.estudiantes.length;
      console.log("Promedio: " + this.promedio);
    }
  }
  
  const obj2 = new Grupo(Array("Carmela","Rocio" , "Francisco"), Array("Rosa", "Luz", "Ana"));
  obj2.calificar();
  obj2.obtPromedio();
  obj2.obtDetalles();
  


  console.log('****************************');

  

  function revertir (str) {
    if (str === "") {
        return "";
    } else {
        return revertir(str.substr(1)) + str.charAt(0);
    }
}

let reverseStringIs = revertir("casa")
console.log(reverseStringIs)



