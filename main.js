// alert("Hola"); 

var nombre = "LEnin";
var altura = 190;

var concatenacion = " " + nombre + " " + altura;

document.write(nombre);
document.write(altura);
document.write(concatenacion);

var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion; 
datos.innerHTML = `
    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Altura: ${altura} cm</h3>
`;

if (altura >= 190) {
    datos.innerHTML += `<h1>Eres una persona alta</h1>`; //+= permite añadir información
} else {
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`;
}

for (var i = 0; i <= 5; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h2> Estamos en el año: " + i;
}

function muestraMiNombre(nombre, altura) {
    var misDatos = `
        <h1>Soy la caja de datos </h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Altura: ${altura} cm</h3>
    `;
    return misDatos; 
}

function imprimir(){
    var datos = document.getElementById("datos"); 
    datos.innerHTML += muestraMiNombre("Lenin RAmos", 173); 
}

// muestraMiNombre("Lenin RAmos", 173); 

imprimir(); 

var nombres = ['Victor', 'Antonio', 'Joaquin']; 

// alert(nombres[1]); 

document.write('<h1>Listado de nombres</h1>'); 

// for(i = 0; i < nombres.length; i++){
//     document.write(nombres[i] + '<br/>'); 
// }

// nombres.forEach(function(nombre){ //forma uno 
//     document.write(nombre + '<br/>');
// }); 

nombres.forEach((nombre) => { //forma dos con calvac
    document.write(nombre + '<br/>');
}); 


//Objetos en JavaScrip
var coche = {
    modelo: 'Mercedes Clase A', 
    maxima: 500, 
    antiguedad: 2020, 
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad); 
        console.log(this.modelo, this.maxima, this.antiguedad); 
        console.log(this.modelo, this.maxima, this.antiguedad); 
        console.log(this.modelo, this.maxima, this.antiguedad); 
        console.log(this.modelo, this.maxima, this.antiguedad); 
    },
    propiedad1: "valor aleatorio"
}; 

document.write("<h1>"+ coche.modelo+"</h1>"); 
coche.mostrarDatos(); 
console.log(coche); 

// Promesas
// capturar respuesta positiva o negativa de un servicio de un trozo de códido de una petició ajax 
// va a llegar un dato positivo o un error 
var saludar = new Promise((resolve, reject) => {
    setTimeout( () => {
        let saludo = "Hola muy buenas a todos chavales!!!"; 
        saludo = false; 
        if(saludo){
            resolve(saludo); 
        }else{
            reject('No hay saludo disponible'); 
        }
    }, 2000); // se ejecuta a los 2 segundos de que llegue 
});

//Then cuando recibimos un resultado que se ejecute el then 
saludar.then(resultado =>{
    alert(resultado);
})
.catch(err => { //para que capture el error 
    alert(err); 
}); //funciona asincrónamente 




