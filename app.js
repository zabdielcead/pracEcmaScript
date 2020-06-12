
//Todo el código escrito en ES5 es compatible en ES6

//ambito de una variable -scope : es la zona del programa en la que se define la variable
//define dos ambitos para las variables  GLOBAL Y FUNCION


//si estamos fuera de una funcion estamos en el escope global... pero si estamos dentro de la funcion estamos en al ambito de la funcion 




//let mensaje = "Hola Mundo"; let es como una variable java si se declara fuera de una funcion se mantiene,let declarara las variables e inicializara las variables 


//console.log(mensaje);

let mensaje = "hola let";

let mensajeDos = "hola2";

if(    1 ===   1){

	 mensaje = "hola mundooooooo";
	 let mensajeDos = "holaif"; //la vida de esta variable mensajeDos solo vive en el if y/o otro bloque
}

console.log(mensajeDos);


//const tipo de valor qu no puede cambiar de valor una ves que se inicializa
const IMPUESTO_CV = 15.25;//se puede crear en ves de nukmero objeto 

console.log(IMPUESTO_CV);

//Las constantes que son objetos, pueden cambiar sus propiedades perfectamente, pero no pueden ser igualadas directamente una vez declaradas.

const PERSONA = {
	nombre : "Fernando",
	apellido:"Herrera"
};

PERSONA.nombre = "Alberto"; //esto es permitido en ecmascitp 6 cambiar la propiedad pero no el objeto reinicializarcr

/*const PERSONA = { esto no se puede
	nombre : "Carlos",
	apellido:"lalal"
};*/
//Las constantes se pueden actualizar siempre y cuando no estén en el mismo bloque de código
console.log(PERSONA);

console.log("clase 6 declaracion de variables en ciclos");

for (var i = 0; i <= 10; i++) { //si pusieramos let for (let i = 0; i <= 10; i++) let solo viviria en el for 
	//
	//
	//

}

console.log(i);   



console.log("Fin clase 6");

console.log("clase 7 declaracion de funciones en ciclos");
var funciones = [];
var funcionesdos = [];

for (var ii = 0; ii < 10 ; ii++) {

	funciones.push( function(){console.log("i es: 	"+ii);});

}	
funciones.forEach( function(func) {
	func();
});

//con la palabra let podemos que impriman uno por uno ya que con var la var ii se remplaza e imprime en consola una ves
//let crea una instancia de la variable
for (let ii = 0; ii < 10 ; ii++) {

	funcionesdos.push( function(){console.log("i es: 	"+ii);});

}	

funcionesdos.forEach( function(func) {
	func();
});

console.log("Fin clase 7");

console.log("clase 8 segmentos de caracteres startsWith, endsWith include");

var saludo = "Hola Mundo";

console.log(saludo.substr(0,1) === "H");

console.log(saludo.endsWith("H"));

console.log(saludo.indexOf("x"));


console.log(saludo.includes("ol")); //regresa true false si contiene el caracter...  las funciones son CaSeSeNsItIvE, es decir, que las mayúsculas y minúsculas son diferentes.


console.log(saludo.startsWith("Mu",5));

console.log(saludo.includes("a",5));

console.log("Fin clase 8");


console.log("clase 9 repeticiones de string");  //Mismo caso anterior, "repeat()" es solo para cadenas de caracteres. strings

let textoX = "Hola";

console.log(textoX.repeat(2));	
console.log("textoX".repeat(2));	


const ESPACIOS = 12;

let arrNombres =["Fernando", "Melisa","Juan"];
let arrTelefonos =["89123121", "11223344","33447788"];

for (i in  arrNombres) {
	let dif = ESPACIOS - arrNombres[i].length;
	console.log( arrNombres[i]  +  " ".repeat(dif) + "|" + arrTelefonos[i]);
}


console.log("Fin clase 9");


console.log("clase 10 plantillas literales");

let nombrePlantilla = "CARLOS";
let apellidoPlantilla = "PEREZ";
let nombreComX = nombrePlantilla + " "+ apellidoPlantilla;
console.log(nombreComX);

let nombreCompletito = `EL nombre es ${nombrePlantilla}  ${apellidoPlantilla}`;//js cuando detecta ` podemos insertar variables


console.log(nombreCompletito);


function nombreCompleto(){
	return "YOLANA MEZAS";
}


 let nombreCompleto2 = `EL nombre es ${nombreCompleto()}`;

 console.log(nombreCompleto2);


 let multilinea = `<h1 class="algo">${nombrePlantilla}</h1>
 <p>Hola mundo</p>`;

  console.log(multilinea);

console.log("Fin clase 10");


console.log("clase 11 template con tags");

let unidadesXX = 5,
	costo_unitarioXX = 10;

	function etiquetaXZ(literales,...substituciones){
		
		let resultado = "";

		console.log(literales);
		console.log(substituciones);

		for (let i = 0; i < substituciones.length; i++) {
			resultado  += literales[i] ;

			resultado  += substituciones[i] ;
		}

		return resultado;
	}

	let messageXX = etiquetaXZ `${unidadesXX} lapices cuestan ${unidadesXX * costo_unitarioXX} pesoss`;

	console.log(messageXX);

console.log("Fin clase 11");


console.log("clase 12 raw crudos en templates literales");

let megaMsje = `Hola \n Mundo\\`;

let megaMsje2 = String.raw`Hola \nMundo\\`;

var megaMsje3 = String.raw`Hola \nMundo\\`;



console.log(megaMsje);
console.log(megaMsje2); //raw aparecen los carcteres aun con su posible escape
console.log(megaMsje3);


console.log("Fin clase 12");


console.log("clase 13 parametros por defecto");


function saludoX(mensaje = "Hola ", tiempo = 1000){// si llega undefined  mensaje = "Hola " Hola va por defecto

	//mensaje =  mensaje || "Hola mundo";
	//

	//mensaje = (typeof mensaje !== "undefined")  ? mensaje : "Hola mundo2";

	setTimeout(function	(){

		console.log(mensaje);
	}, tiempo);
}

saludoX();


function saludarXX(fn = fdefecto,persona ={ nombre: "FERNANDO"} ){

	console.log(  typeof fn  );

	if(typeof fn === "undefined"){
		console.error('No es un a funcion');
	}

	fn();

	console.log( persona );
}

function fdefecto(){
	console.log("Hola mundo fndefecto");
}


saludarXX();


console.log("clase 13");



console.log("clase 14  como  los valores por defecto afectan el objeto arguments");
//en js cuando generamos una funcion automaticamente se creaa el objeto arguments -> que es un arreglo de los argumentos 
//Arguments es un objeto de las funciones normales, que muestra todos los parámetros enviados a la función aunque no estén definidos explícitamente.
	function sumarXY(a = 1,b = 2){
		console.log(arguments);
	}

//Argumens es un arreglo de los parametros que enviamos a la función al momento de ejecutarla. En este caso no estamos mandando ningún argumento o parámetro.
	//sumarXY(1,3); // se ve argumentos
	sumarXY(); //NO se ven argumentos 

console.log("clase 14");


console.log("clase 15  parametros Rest");
	//ecma script 5
	//En el ECMAScript 5, no existía los parámetros rest, se puede tener la funcionalidad utilizando arguments, pero no es lo mismo.
	function agregar_alumnos(){
		console.log(arguments);
		for (var ixx = 0; ixx < arguments.length; ixx++) {
			arguments[0].push( arguments[i] );
		}

		return arguments;
	}

var alumnos_arr = ["FERNANDO"];

var alumnos_arr2 = agregar_alumnos(alumnos_arr,"MARIA","PEDRO","SUSANA", "JUAN");

console.log(alumnos_arr2);


	//ecma script 6 

	function agregar_alumnosdos(arr_alumnos,...alumnos){
		console.log(arguments);
		for (let ixxp = 0; ixx < alumnos.length; ixxp++) {
			arr_alumnos[ixxp].push( alumnos[ixxp] );
		}

		return arr_alumnos;
	}



	let alumnos_arr6 = ["FERNANDO"];

	let alumnos_arr2_6 = agregar_alumnos(alumnos_arr6,"CEAD","ARTEMIO","MALAGA", "LOPEZ");

	console.log(alumnos_arr2_6[0][0]);

console.log("clase 15");


console.log("clase 16  restricciones Rest");
//solo puede existir un parametro  rest en la funcion
//el parametro rest debe ir siempre como ultimo parametro

console.log("clase 16");

console.log("clase 17  operador  spread");
/*
	mientras que el parametro Rest permite especificar argumentos independientes que seran combinados  en un arreglo
	el operador spread permite especificar un arreglo que sera separado y cada item enviado  será un argumento 
	independiente a la funcion

*/


 var numspread1 = 10,
 	 numspread2 = 30;	


 var maxSpread = Math.max(numspread1,numspread2);	 


console.log(maxSpread);

let numerosspreadx = [1,5,3,10,20,11];

//desde ecma 5 todas las funciones tienen un método apply que permite cambiar el objeto this y mandar un arreglo adicional 


 //var maxSpreaddos = Math.max.apply(Math,numerosspreadx);	
 //con ecma 6
let maxSpreaddos = Math.max(...numerosspreadx);


 console.log(maxSpreaddos	); 

console.log("clase 17");

console.log("clase 18  Romper la relacion  de referencia de los objetos");

//en Js todos los objetos son pasados por referencia

let personaxuno = {
	nombre: "FERNADNO",
	edad: 30
};


let personaxdos = {... personaxuno};  //se pasan los valores personaxuno a personaxdos como independiente por el operador spreads
personaxdos.nombre = "JUAN";

console.log(personaxuno);
console.log(personaxdos);

console.log("clase 18");



console.log("clase 19 Añadir propiedades a objetos a partir de otros objetos ");

let personazuno = {
	nombre: "ARTEMIO",
	edad: 30
};

let personazdos = {
	nombre: "CARLOS",
	edad: 25,
	direccion: "RESIDENCIAS",
	conduce:true,
	vehiculo: true,
	vegetariano: false,
	casado: true
};

//personazuno = {...personazdos};//todas las propiedades personazdos pasan a  personazuno
personazuno = {...personazdos,...personazuno};//todas las propiedades personazdos se fusionan

console.log(personazuno);
console.log(personazdos);


console.log("clase 19");


console.log("clase 20 Diferencias entre Spread y Rest");
//Rest:  Junta los elementos en un arreglo 
//Spread: Esparce los elementos  como si fueran enviados  de forma separada


function saludarRest(saludo, ...nombres){
	for (i in nombres) {
		console.log(`${saludo} ${nombres[i]}`);
	}
}

function saludarSpread(saludo,...nombres){
	console.log(`${saludo} ${nombres}`);
}


saludarRest("HolaRest","fernando","maria","susana");


let personasXYZZ =["Melissa","Hernando", "Juan"];

saludarSpread("HolaSpread", personasXYZZ);

let partesCuerpo = ["brazos","piernas"];
let cuerpoZ = ["cabeza","cuello", ...partesCuerpo, "pies", "dedos"];

console.log(cuerpoZ);

console.log("clase 20");


console.log("clase 21 Aclarando el doble comportamiento de la funciones ");
/*

En ECMA SCRIPT 5 Y VERSIONES ANTERIORES las funciones sirven con un doble propósito de ser llmadas con o sin la palabra
reservada "new"

con la palabra new: el valor de THIS dentro de la funcion es un nuevo objeto  y ese nuevo objeto es retornado

sin la palabra new: simplemente  hacemos el llamado de la funcion  y esperamos el retorno de algun valor procesado
que puede ser un objeto, undefined o null
*/


function PersonotaZZZ(nombre){
	//determinar si la funcion fue llamada con el objeto new o de otra forma 
	//if(this instanceof PersonotaZZZ){
	if(typeof new.target !== "undefined"){ //si fue creada la funcion con el new	
		this.nombrelpz = nombre;
	}else{
		throw new Error('Esta funcion se debe utilizar con new')
	}

	this.nombrelpz = nombre;

	
}

var personaZV = new PersonotaZZZ("Fernando");

//var noEsPersona = PersonotaZZZ("CARLOS"); // THIS CUANDO SE MANDA A LLAMAR PersonotaZZZ es el this del contexto global y tiene una propiedad en window

//todas las funciones en su prototipo tienen otra funcion que es call
console.log(personaZV);

//console.log(noEsPersona);

/*
new target = es una metapropiedad de un no objeto  nueva en ecma6 que provee informacion adicional relacionada con
su procedencia

cuando el constructor de la funcion es llamada new.target se llena con el operador new

Si la funcion Call() es ejecutada "new.target" no estara definida ya que no se ejecuto el constructor

*/





console.log("clase 21");


console.log("clase 22 funciones de flecha");

/*

	normalmente tienen la misma estructura
	1 funcion con argumentos
	2 seguido de una flecha gorda = >
	3 seguido del cuerpo de la funcion

	Beneficios:
	- menos codigo que es mas simplede interpretar
	- no hay un nuevo  "this" dentro de las funciones
	- no hay constructores, no tiene new
	- no puedes cambiar el valor del "this"  aunque uses call(), apply() o bind()
	- no hay objeto "arguments"
*/



var mifuncionXX2 = function(valor){
	return valor;
}

let miFuncionXXX1 = valor => valor; //el primer valor es el parametro de entrada y el segundo es el retorno del valor

console.log(mifuncionXX2("funcionNormal"));

console.log(miFuncionXXX1("funcionFlecha"));
	

	var sumarrr2 = function(num1,num2){
		return num1+num2;
	}


	let sumarrr1 = (num1,num2) => num1+num2;


	console.log(sumarrr1(2,5));


	//sin argumentos

	let saludsss = () => "Hola joto";

	console.log(saludsss());


	var saluddddPersonaX = function(nombre){
		var salida = "Hola, " + nombre;
		return salida;
	}
	//cuerpo de la funcion 
	let saluddPersonaXYZ  = nombre => {
		let salidaXTU = `Hola ${nombre}`;

		return salidaXTU;
	}

	console.log(saluddPersonaXYZ("CEAD"));


	//OBTENER UNA LITERAL DE UNA FUNCION

	var obtenerLibroWAR = function(id){
		return {
			id:id,
			nombre:"HARRY POTTER"
		}
	}

	let obtenerLibroWARRow = id => ({ id:id,nombre:"MATILDA" });

	console.log(obtenerLibroWAR(1));
	console.log(obtenerLibroWARRow(2));

console.log("clase 22");


console.log("clase 24 creando funciones anonimas");


var salussss = function(nombre){
	return "Hola "+ nombre;
}('FERNAN');

console.log(salussss);

var saludXYZZZZZZZZ = (nombre => `Hola ${nombre}`)("ARTEAGA");

console.log(saludXYZZZZZZZZ);

console.log("clase 24");

console.log("clase 25 No hay cambios en el objeto this");

var manejadorXXX = {
	id:"123",
	init: function(){

		document.addEventListener("click",
			event => {	
							console.log("Holajoto",this);

							this.clickEnPagina( event.type );

					},false); //el  false es para decir que no ejecutamos una funcion inmediatamente creada

		/*
		document.addEventListener("click",(function(event){
			console.log("this es: ",this);
			this.clickEnPagina( event.type );
		}).bind(this),false); //bind
		*/

	},//fin del init
	clickEnPagina:function(type){
		console.log("manejando "+ type +" para el id: "+this.id);
	}
};


manejadorXXX.init();

console.log("clase 25");


console.log("clase 26 Funciones de flecha y arreglos");
var arreglop =[8,9,10,7,6,3];

var ordenadozzz = arreglop.sort(function(a,b){
	return a-b;
});

console.log(ordenadozzz);

let ordenadoesc6 = arreglop.sort((a,b) => a-b);

console.log(ordenadoesc6);

console.log("clase 26");


console.log("clase 27 Identificando funciones de flecha y otros ejemplos");

var restarPP = (a,b) => a-b;

console.log(typeof restarPP);

console.log( restarPP  instanceof Function );


//funcion anonima  con flecha
//esto no funciona
/*	((a,b)=>{
		console.log(arguments[0]);
	})();
*/	

//funciones de flecha
/*
Es una característica principal, las funciones de flecha no cambian el this.
Las funciones de flecha tienen constructores? NO

(()=>{}); flecha anonima

Definitivamente no, las funciones tradicionales no sólo trabajan como funciones, sino que permiten la creación de objetos y otros mecanismos totalmente útiles hoy en día. Las funciones de Flecha expanden el JavaScript y nos dan utilidades nuevas, pero no reemplazan a las funciones tradicionales.
*/

//esto si funciona
function restaxxxppp(num , num2){
	((a,b)=>{
		console.log(arguments[0]);
	})();
}

restaxxxppp(5,3);

console.log("clase 27");


console.log("clase 28 Adiciones a los objetos");
//en ecma5 se hacian asi los objetos
var objeto ={
	nombre:"MELISSA"
};


function createPersonXX(nombre, apellido,edad){
	return{
		nombre:nombre,
		apellido:apellido,
		edad:edad
	}
}
//en ecma6 se hacen asi

function createPersonX6(nombre, apellido,edad){
	return{
		nombre,
		apellido,
		edad
	}
}


var personEduardo = createPersonXX("CARLOS","ARTEAGA",32);
console.log(personEduardo);
var personEduardoR = createPersonX6("EDUARDO","LOPEZ",20);

console.log(personEduardoR);

console.log("clase 28");

console.log("clase 29 Métodos concisos");
//son caracteristicos de ECMA6

var personpsX ={
	
	nombre:"LALOS",

	/*
	getNombre:function(){
		console.log(this.nombre);
	}
	*/

	//con ecma6 se hace asi
	getNombre(){
		console.log(this.nombre);
	}

};

personpsX.getNombre();

console.log("clase 29");

console.log("clase 30 Nombres de propiedades computadas o procesadas");

var personaxxxxxp ={};
var apellidokkkkk = "apellido";

personaxxxxxp["primer nombre"] = "Fernando";
personaxxxxxp[apellidokkkkk] = "Herrrera";

console.log(personaxxxxxp["primer nombre"] );
console.log(personaxxxxxp[apellidokkkkk]);

console.log(personaxxxxxp);

//en ecma6
var apellidoecma6 = "primer apellido";
var personaecma6 = {
	"primer nombre": "CEAD",
	[apellidoecma6]: "ARTEAGA"
}; 
console.log(personaecma6["primer nombre"] );
console.log(personaecma6[apellidoecma6]);
console.log(personaecma6);


var subfijoecma6 = " nombre";
var personaecma66 = {
	[ "primer" + subfijoecma6 ] : "MELISA",
	[ "segundo" + subfijoecma6 ] : "KAREN"
}
console.log(personaecma66["primer nombre"] );
console.log(personaecma66["primer" + subfijoecma6] );
console.log(personaecma66["segundo" + subfijoecma6] );


console.log("clase 30");

console.log("clase 31 Nuevo metodo: object.is()");

console.log( +0 == -0 );
console.log( +0 === -0);
console.log(  Object.is(+0,-0) );

console.log("=====================");

console.log( NaN == NaN );
console.log( NaN === NaN );
console.log(Object.is(NaN,NaN) );


console.log("=====================");

console.log(5 == 5);
console.log(5 == "5");

console.log(5 === 5);
console.log(5 === "5");
console.log("=====================");
console.log( Object.is(5,5) );
console.log( Object.is(5,"5") );

console.log("clase 31");


console.log("clase 32 Nuevo metodo: object.assign()");

//propiedades de un objeto y psarcelas a otro

function mezclarPPPP(objReceptor,objDonador){

	Object.keys(objDonador).forEach(function(key){
				objReceptor[key] = objDonador[key];
	});
	return objReceptor;
}

var objReceptorsss = {};
var objDonadorsssss = {
	nombre: "mi-archivo.js"
};

var objDonadorssssses = {
	get nombre(){
		 return "mi-archivo.js"
	}	 
};


console.log( mezclarPPPP(objReceptorsss,objDonadorsssss) );
console.log(objDonadorssssses.nombre);

//esto con assign  se puede resumir 
var objReceptorsssx= {};
var objDonadorsssssx = {
	get nombre(){
		 return "mi-archivo.js"
	}	 
};
console.log(Object.assign(objReceptorsssx,objDonadorsssssx));
console.log("clase 32");

console.log("clase 33 Orden de enumeracion de las propiedades de los objetos");
/*

	-todas la llaves van en orden ascendente
	-todas las llaves tipo string , van ordenadas en la manera que fueron agregadas al objeto
	-todos los simbolos en el orden que fueron agregados al objeto


	En los objetos literales, podemos evitar el uso repetitivo de nombres de propiedades y nombres de variables siempre y cuando la variable que queremos agregar al objeto exista.
*/
var objetoEnumX= {
	c:1,
	0:2,
	x:3,
	15:1,
	r:1,
	3:2,
	b:1
}

objetoEnumX.d = 5;
objetoEnumX["2"] = 9;
objetoEnumX["a"] =7;

console.log(  Object.getOwnPropertyNames(objetoEnumX).join(",")  );

console.log( Object.keys(objetoEnumX) );

console.log( JSON.stringify(objetoEnumX) );

for(i in Object.keys( objetoEnumX )){
	console.log( Object.keys( objetoEnumX )[i] );

}

console.log("clase 33");

console.log("clase 34 Cambiar el prototipo de un objeto");
/*
herencia
encapsulamiento
abstraccion
polimorfismo
*/
let gatoXX = {
	sonido(){
		console.log("Miau");
	},
	chillido(){
		console.log("Miau!!!!!");
	}
};

let perroXX = {
	sonido(){
		console.log("Guau");
	}

}

let angora = Object.create(gatoXX);
console.log("angora",angora);
console.log(Object.getPrototypeOf(angora) === gatoXX);

angora.sonido();
angora.chillido();

Object.setPrototypeOf(angora, perroXX);
console.log(Object.getPrototypeOf(angora) === gatoXX);
console.log(angora);
angora.sonido();
//angora.chillido();

console.log("clase 34");
console.log("clase 35 Acceso al prototipo con la referencia SUPER");

let personaaxzz = {
	saludar(){
		return "HOLA";
	}
};

let amigoxxza = {
	saludar(){

		//return Object.getPrototypeOf(this).saludar(this)+", saludos!!";
		return super.saludar() + " saludos"; 
		//super es lo que hereda 
	}
};


Object.setPrototypeOf(amigoxxza,personaaxzz);

console.log(amigoxxza.saludar());

let raay = {  
  drive() {  
    return 'Add raay';  
  } , 
  holas(){
  	return "HOLAS!!";
  }
}  
let naty  = {  
  net() {  
    return super.holas()+'use net';  
  }  
}  

Object.setPrototypeOf(naty, raay);  

console.dir(naty); //prints the naty object  
console.log(naty.net()); // use net  
console.log(naty.drive()); // Add raay  

console.log("clase 35");
console.log("clase 36 Destructuracion de objetos");

var ajustesXYZ = {
	nombre : "FERNANDO",
	email : "fernando@gmail.com",
	facebook: "fernando.herrera",
	google: "fernanod.her.google",
	premium: true
};

//ecma 6 agrego destructuracion de objetos para no hacer ajustesXYZ.nombre

let {  nombre, email, facebook, google, premium:dePagox, twitter:cuentaTwit = "fer85"   } = ajustesXYZ; //ajustesXYZ.nombre

console.log(nombre, email, facebook, google, dePagox, cuentaTwit);

console.log("clase 36");

console.log("clase 37 Destructuracion de objetos anidados");
	
	let autoGuardadoAXZ = {

		archivo:"app.js",
		cursor:{
			linea:7,
			columna:16
		},
		ultimoArchivo:{
			archivo:"index.html",
			cursor:{
				linea:8,
				columna:20
			}
		},
		otroNodo:{
			subNodo:{
				cursor:{
					linea:11,
					columna:11
				}
			}
		}

	};
	
	let {  cursor:cursorActivo   } = autoGuardadoAXZ;
	console.log(cursorActivo);

	let { ultimoArchivo:{ cursor:ultimoArchivos }  } = autoGuardadoAXZ;
	console.log(ultimoArchivos);

	let{  otroNodo:{subNodo:{cursor: otroCursor}}  } = autoGuardadoAXZ;

	console.log(otroCursor);

	//otra forma 
	let otroSuperNodo22 = autoGuardadoAXZ.otroNodo.subNodo.cursor;
	console.log(otroSuperNodo22);
console.log("clase 37");

console.log("clase 38 Destructuracion de arreglos");

let frutas = ["banano","pera", "uva"];
let [ fruta1, fruta2 ] = frutas;

console.log(fruta1,fruta2);
let[,,fruta3] = frutas;

console.log(fruta3);

let az = 1;
let bz = 2;
let tempz;

tempz = az;
az = bz;
bz = tempz;

console.log("az= ",az);
console.log("bz= ",bz);

[az,bz] = [bz,az];
console.log("az= ",az);
console.log("bz= ",bz);

console.log("clase 38");

console.log("clase 39 Destructuracion de arreglos anidados");
	
	let colores1 = ["rojo1",["verde","amarillo"],"morado","naranja"];
	let [color1, [,color2]] = colores1;
	console.log(color1);
	console.log(color2);

	let colores2 = ["rojo","verde","amarillo","morado"];
	let [ colorPrincipal, ...demasColores ] = colores2; // esta ...demasColores dolo funciona para arreglos no para los objetos
	console.log(colorPrincipal);
	console.log(demasColores);

console.log("clase 39");

console.log("clase 40 Valores por defecto en la destructuracion");
let fruistx =["platano"];
let [frutaxx1, frutaxx2 = "manzana" ] = fruistx;
console.log(frutaxx1);
console.log(frutaxx2);

let optionxxzz = {
	nombrexxxa:"CARLOS"
};


let { nombrexxxa, apellidoxwzq="ORPI" } = optionxxzz;
console.log(nombrexxxa,apellidoxwzq);

console.log("clase 40");

console.log("clase 41 Destructuracion de parametros");

function crearJugadorABC( nickname,  
		{hp, sp, clase} = { hp:100, sp:50, clase:"Mago" }

	){

	

/*
	opciones = opciones || {};

	//es innecesario

	let hpABC =  opciones.hp,
		spABC =  opciones.sp,
		clase =  opciones.clase;

		console.log(nickname, hpABC, spABC, clase);
*/
	console.log(nickname, hp, sp, clase);
}
//sin objeto
crearJugadorABC("strider");
//con objeto
crearJugadorABC("strider",{
	hp:200,
	sp:300,
	clase:"mono"
});
console.log("clase 41");

console.log("clase 42 Introduccion a símbolos");
/*

	los simbolos: son un tipo de dato único
	1 undefined
	2 null
	3 boolean
	4 number
	5 string
	6 object
	7 symbol
	

	Las propiedades con simbolos, se deben de llamar siempre con las llaves cuadradas "[ ]" si no, es como querer accesar una propiedad que no esta definida en el objeto.
*/

console.log("clase 42");
console.log("clase 43 Simbolos y propiedades");
	
	let primerXName  = Symbol();
	let segundoXName  = Symbol();
	let perssonaaaazx = {
		[segundoXName]:"HERRERASS"
	};

	perssonaaaazx[primerXName] = 'CEAD';

	console.log(perssonaaaazx[primerXName]);
	console.log(perssonaaaazx[segundoXName]);

	let simbolo1 = Symbol('simbolo');
	let simbolo2 = Symbol('simbolo');
	//los simbolos siempre son diferentes
	console.log( simbolo1 == simbolo2 );
	console.log( simbolo1 === simbolo2 );
	console.log( Object.is(simbolo1 ,simbolo2) );
	//los simbolos no se pueden pasar a string

	console.log( typeof  primerXName);
console.log("clase 43");

console.log("clase 44 Compartiendo símbolos");
/*
	En este caso, si es verdadero, porque el Symbol.for, verifica si existe el símbolo, si no, lo creara... en la segunda línea, busca el símbolo y lo encuentra, por eso le asigna el mismo valor que tenia el símbolo original.

*/
let userIDX = Symbol.for("userID");
let objetosXABC = {};
	objetosXABC[userIDX] ="12345";
	console.log(objetosXABC[userIDX]);
	console.log(userIDX);

let userIDX2 = Symbol.for("userID");
console.log(userIDX == userIDX2);
console.log(userIDX === userIDX2);
console.log(Object.is(userIDX, userIDX2));

console.log(objetosXABC[userIDX2]);
console.log(userIDX2);

let superIDX = Symbol.for("id  unico");
console.log(Symbol.keyFor(superIDX));

let superIDX2 = Symbol.for("id  unico");
console.log(Symbol.keyFor(superIDX2));

console.log("clase 44");

console.log("clase 45 coercion de los símbolos");
	
	//symbol : tipo de dato unico  y sirven para identificar cosas de manera unica
	//La coercion en JavaScript permite convertir los valores para poder realizar este tipo de cálculos.
	let idSimbol =  Symbol.for("idxx");
	let numerito =10;
	let textito = "1000";
	let booleanito = true;

	console.log("mis simbolo es: ", idSimbol);
	console.log("mis simbolo es: ", String(idSimbol));

console.log("clase 45");

console.log("clase 46 Recuperando las propiedades del simbolo");

let idppp = Symbol.for("ids");
let activoppp = Symbol.for("activo");

let personaXsymbol = {
	[idppp]: "123",
	[activoppp]: true,
	nombre: "FERNANDO",
	apellido:"APELLIDO",
	edad:31
};
//Cuál función necesito ejecutar, si quiero traer todas las propiedades NO SÍMBOLO de un objeto.

let getSimbolos = Object.getOwnPropertySymbols(personaXsymbol);
console.log(getSimbolos);
	for(i in getSimbolos){
		console.log(getSimbolos[i], Symbol.keyFor(getSimbolos[i]));
	}

console.log("clase 46");

console.log("clase 47 SET");
//SON UNA LISTA ORDENADA DE VALORES SIN DUPLICADOS
// son un nuevo tipo de coleccion de datos


console.log("clase 47");
console.log("clase 48 AGREGANDO items y buscando elementos");
	let itemsPP = new Set();

	itemsPP.add(10);
	itemsPP.add(11);
	itemsPP.add(8);
	itemsPP.add(7);
	itemsPP.add(7);
	itemsPP.add("7");
	//si se repiten no manda un error solamente los ignora, noo ignora en el caso que sean diferentes tipo de objeto 7 y "7"

	console.log(itemsPP.size);
	console.log(itemsPP);	


	let itemsPP2 = new Set( [1,2,3,4,5,6,7,7,7,7,7,7,7,7] );

	console.log(itemsPP2.size);
	console.log(itemsPP2);	
	console.log( itemsPP2.has(7) ); //nos regresa un booleano si existe el 7
console.log("clase 48");
console.log("clase 49 removiendo valores set");
	
		let itemRemove = new Set([1,2,3,4,5]);

		console.log(itemRemove.size);
		console.log(itemRemove);
		itemRemove.delete(2); //el dos es el valor del set y no la posicion
		console.log(itemRemove.size);
		console.log(itemRemove);
		//itemRemove.clear(); borra todo


console.log("clase 49");

console.log("clase 50 forEach en los sets");
	let personaaaaeach = new Set(["FERNANDO","MARIA","SUSANA"]);

	personaaaaeach.forEach(function( valor,llave,setOriginal ){
		console.log(valor,llave,setOriginal);
	});

console.log("clase 50");
console.log("clase 51 convertir set en array");

	let numeritoxxxabc = [1,2,3,4,5,6];
	let setnumeritoxxxabc = new Set(numeritoxxxabc);
	console.log(setnumeritoxxxabc);
	let arrayNumeritosx =[...setnumeritoxxxabc];
	console.log(arrayNumeritosx);

	let otrosNumeros = [1,2,3,3,3,4,5,6,7,7,7,7];
	let otroarrayNum = eliminaDuplicados(otrosNumeros);
	console.log(otroarrayNum);

	function eliminaDuplicados(items){
		let setItems = new Set(items);
		return [...setItems];
	}

console.log("clase 51");
console.log("clase 52 weekset");
//comportamiento diferente a set

let setweks = new WeakSet();

let personawek1 = {
	nombre:"CARLITOS"
};

let personawek2 = {
	nombre:"ARTEMIO"
};

setweks.add(personawek1);
setweks.add(personawek2);
console.log(setweks);
//setweks.delete(personawek1);
//console.log(setweks);
/*
1. en un weekset add(), has(), remove() dan un error  si enviamos como parametro algo que no se aun objeto
2. no tiene manera de hacer repeticiones o ciclos for  in
3. los weeksets no tienen keys(),values( ) por lo que no hay manera vía programacion de saber cuantos elementos hay dentro
4. no tienen un for each tampoco.
5 no tienen porpiedad size


ejemplo
let personas = new Set("fernando");
console.log( personas ); se crea un set con los valores "f", "e", "r" etc
Un STRING, es un arreglo de caracteres, al mandarlo al constructor de un set, lo descompone y excluye los duplicados.

let personas = new Set(["fernando","Maria"]);
personas.clear(1);
console.log( personas );
El parametro adicional que enviamos en el CLEAR, es ignorado por el interprete.
se borran todos los registros del set
*/

console.log("clase 52 Introduccion de maps");
//es un tipo de coleccion de datos que tiene llave y valor
//tienen metodos has(),delete(),clear(), size(), iteraciones
let mapaCaso = new Map();
let objetomapa = [{
	obj:"obj"
}];

mapaCaso.set("nombre","Fernando");
mapaCaso.set("edad",31);
mapaCaso.set("apellido");
mapaCaso.set({obj:"obj"},{hola:"hola mundo"});
console.log(mapaCaso);
console.log(mapaCaso.size);
console.log( mapaCaso.get( "nombre" ) );
console.log( mapaCaso.has("nombre"));
console.log( mapaCaso.has("apellido"));
console.log( "getapellido",mapaCaso.get( "apellido" ) );
console.log( mapaCaso.get( objetomapa[0].obj ));

mapaCaso.delete("apellido");
console.log( mapaCaso.has("apellido"));
console.log( mapaCaso.get( "apellido" ) );
console.log(mapaCaso);

//	mapaCaso.clear();//borra mapa a vacio
  console.log("for");
for (let key of mapaCaso.keys()) {

    console.log(key);
   
}

console.log("clase 52");

console.log("clase 53,54,55 Inicializaciones de los mapas");

let mapallls = new Map([  ["nombre","fernando"], ["edad",31]   ]);
console.log(mapallls);

console.log("clase 53,54,55");


console.log("clase 56 foreach de los mapas");
 let mapaWife = new Map( [ ["nombre","YOLANDA"], ["edad",31]  ] ); 

 mapaWife.forEach(  function( value, llave, mapaOrigen ){

 	console.log(`llave: ${llave}, valor: ${value}`);
 	console.log(mapaOrigen);
 } );


 console.log("=======");

 mapaWife.forEach( (valor,llave) => {
 	console.log(`llave: ${llave}, valor: ${valor}`);
 } );

console.log("clase 56");

console.log("clase 57 ciclo FOR-OF");
//trabaja muy bien con set y maps

let numeritosSet =  [100,20,30,50,200];
/*
for(  let ixp in  numeritosSet){
	console.log(numeritosSet[ixp]);
}
*/
for(  let ixp of  numeritosSet){
	console.log(ixp);

}	

let personalforof = [
	{  nombre: "JOSUE", edad: 31 },
	{  nombre: "MARIA", edad: 10 },
	{  nombre: "SUSANA", edad: 11 },
	{  nombre: "ALBERTO", edad: 14 },
	{  nombre: "PEDRO", edad: 15 }
];

for(  let othPers of  personalforof){
	console.log(othPers.nombre, othPers.edad);

}	

let personSetforof = new  Set();
personSetforof.add({ nombre:"PEPS", edad:19  });
personSetforof.add({ nombre:"MARIA", edad:31  });

for(let pesetofof of personSetforof){
	console.log(pesetofof.nombre, pesetofof.edad);
}


let personMapforof = new  Map( [ ["nombre","fernando"],["apellido","maria"] ] );

for(let pesetMapofof of personMapforof){
	console.log(pesetMapofof);
}

/*

Dato el siguiente código, ¿Cuál es la salida en consola?

	let mapa = new Map([[]]);
	console.log( mapa.has() );
	true
	¡Buen trabajo!

Esta preguntando, si el "undefined" existe en el Mapa, y como lo inicializamos con un par de valores "undefined", por eso retorna true

*/

console.log("clase 57");

console.log("clase 58, 59 Clases");

//clases en ecma 5, un constructor es lo primero que se ejecuta en una clase 

function MegaPersonitaClas(nombre){
	this.nombre  = nombre;
	this.gritarNombre = function(){
		console.log(this.nombre.toUpperCase());
	}
}


MegaPersonitaClas.prototype.decirNombreClase = function(){
	console.log(this.nombre);
}

let myNamePersonal = new MegaPersonitaClas("cead");

myNamePersonal.gritarNombre();
myNamePersonal.decirNombreClase();

//clases en ecma 5
console.log("clase 58, 59");

console.log("clase 60,61 declaracion de una clase en es6");

 class  Personita{
 	
 	constructor(nombre){
 		this.nombre = nombre;
 	}

 	//Personita.prototype.decirNombre
 	decirNombre(){
 		console.log(this.nombre);
 	}
 }


 let fernandolapsZ = new Personita("HERNANDO");

 	fernandolapsZ.decirNombre();
 	console.log(fernandolapsZ instanceof Personita);
 	console.log(fernandolapsZ instanceof Object);

 	console.log( typeof Personita );

 	/*
		Las clases funcionan muy parecido a la declaracion LET
		Todo el codigo dentro de la clase funciona en modo "strict mode"
		todos los metodos no son enumerables 
		todos los metodos internos no tienen constructor
		llamar una clase sin new genera error
		tienen metodos estáticos y privados
 	*/
console.log("clase 60,61");

console.log("clase 62 clases como expresiones");
	let miFuncionClase = function(){
		console.log("Hola mundo dos");
	}

	let otraFuncionClase  = miFuncionClase;

	console.log( typeof otraFuncionClase );

	otraFuncionClase();
console.log("clase 62");