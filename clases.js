// molde para generar objetos de un tipo específico 
class Coche {
    constructor(modelo, velocidad, antiguedad){ //Se ejecuta primero o al inciio 
        //propiedades, cualidades del molde 
        this.modelo = modelo; 
        this.velocidad = velocidad; 
        this.antiguedad = antiguedad; 
    }

    //métodos acciones que es capaz de realizar dicho objeto 
    aumentarVelocidad(){
        this.velocidad += 1; 
    }

    reducitVelocidad(){
        this.velocidad -=1; 
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad); 
        this.altura = 5; 
    }
    mostrarAltura(){
        return "La altura del bus es: " + this.altura; 
    }
}
var coche1 = new Coche('BMW', 200, 2017); 
var coche2 = new Coche('Audi', 100, 2018); 
var coche3 = new Coche('Mercedes', 200, 2017); 
var coche4 = new Coche('Renault', 200, 2017); 

console.log(coche1);
document.write("<h1>Velocidad: "+ coche1.velocidad+"</h1>");
coche1.aumentarVelocidad();  
coche1.aumentarVelocidad();  
coche1.aumentarVelocidad();  
console.log(coche1); 

document.write("<h1>Velocidad: "+ coche1.velocidad+"</h1>"); 

var autobus1 = new Autobus('Pegasus', 200, 2017); 
console.log(autobus1); 
document.write(autobus1.mostrarAltura());