let x1 = 10;
let x2 = 110;

function somar(){
	console.log(`${x1} + ${x2} `) //template String
}

function calc(x1,x2,operator){
	return eval(` ${x1} ${operator} ${x2}`)
}

((x1,x2,operator) => {
	return eval(` arrowFunction - ${x1} ${operator} ${x2}`)
}); //arrow function

console.log(calc(x1,x2,'+'))
somar()

//////////////////////////////// eventos//////////////////////
window.addEventListener('focus', event =>  {
	console.log("window focus")
	}) // window é a janela -> acesso ao histórico do usuário, abrir nova janela, foco em jabela

document.addEventListener('focus', event =>  {
	console.log("document focus") // document é o site, trabalha-se mais com document
})
////////////////////////////////////////////////////////////////////

// Date - mes começa com 0 até 11
let agora = new Date().getDay()
console.log(agora)

// array  

let carros = ["carro1", "carro2", "carro3", {obj: 1, car:[{obj1:1,obj2:2}]} ]

carros.forEach(function(value,index){
	console.log(index,value)
})

// Objetos
let celular = function(){
	this.cor = "prata";
	
	this.ligar = function(){ // método do objeto celular
		console.log(objeto)	
	}
}

let objeto = new celular()
console.log(objeto)

//ECMA 6 com classe
class Celular {

	constructor(){
		this.color = "prata"	
	}
	
}
let objeto1 = new Celular()
console.log(objeto)