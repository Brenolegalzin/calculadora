let num1 = "";
let num2 = "";
let op = "";
let num1OrNum2 = 1;
const saveCalc = calcular;
const saveNumeroUm = numeroUm;
const saveDois = dois;
const saveTres = tres;
const saveQuatro = quatro;
const saveCinco = cinco;
const saveSeis = seis;
const saveSete = sete;
const saveOito = oito;
const saveNove = nove;
const saveZero = zero;
function numeroUm(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"1"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"1"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function dois(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"2"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"2"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function tres(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"3"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"3"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function quatro(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"4"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"4"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function cinco(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"5"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"5"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function seis(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"6"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"6"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function sete(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"7"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"7"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function oito(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"8"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"8"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
    }
}
function nove(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"9"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"9"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function zero(){
	if(num1OrNum2==1){
		const resultado = document.getElementById("result");
	    num1 = num1+"0"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num1;
	}
	else{
		const resultado = document.getElementById("result");
	    num2 = num2+"0"
	    document.getElementById("result").innerText = "";
	    document.getElementById("result").innerText = num2;
	}
}
function mais(){
	op = "+";
	calcular = saveCalc;
	if(num1OrNum2>=3){
		num1OrNum2 = 2;
	}
	num1OrNum2 += 1;
}
function menos(){
	op = "-";
	if(num1OrNum2>=3){
		num1OrNum2 = 2;
	}
	num1OrNum2 += 1;
}
function vezes(){
	op = "x";
	if(num1OrNum2>=3){
		num1OrNum2 = 2;
	}
	num1OrNum2 += 1;
}
function ponto(){
	if(num1OrNum2==1){
		num1 = num1+".";
		document.getElementById("result").innerText = "";
		document.getElementById("result").innerText = num1;
	}
	if(num1OrNum2==2){
		num2 = num2+".";
		document.getElementById("result").innerText = "";
		document.getElementById("result").innerText = num2;
	}
}
function dividir(){
	op = "/";
	if(num1OrNum2>=3){
		num1OrNum2 = 2;
	}
	num1OrNum2 += 1;
}
function calcular(){
	if(op=="+"){
		document.getElementById("result").innerText = parseFloat(num1) + parseFloat(num2);
		num1 = "";
		num2 = "";
		num1OrNum2 = 0;
		calcular = function(){};
		um = function(){};
		dois = function(){};
		tres = function(){};
		quatro = function(){};
		cinco = function(){};
		seis = function(){};
		sete = function(){};
		oito = function(){};
		nove = function(){};
		zero = function(){};
	}
	if(op=="-"){
		document.getElementById("result").innerText = parseFloat(num1) - parseFloat(num2);
		num1 = "";
		num2 = "";
		num1OrNum2 = 0;
		calcular = function(){};
		um = function(){};
		dois = function(){};
		tres = function(){};
		quatro = function(){};
		cinco = function(){};
		seis = function(){};
		sete = function(){};
		oito = function(){};
		nove = function(){};
		zero = function(){};
	}
	if(op=="x"){
		document.getElementById("result").innerText = parseFloat(num1) * parseFloat(num2);
		num1 = "";
		num2 = "";
		num1OrNum2 = 0;
		calcular = function(){};
		um = function(){};
		dois = function(){};
		tres = function(){};
		quatro = function(){};
		cinco = function(){};
		seis = function(){};
		sete = function(){};
		oito = function(){};
		nove = function(){};
		zero = function(){};
	}
	if(op=="/"){
		document.getElementById("result").innerText = parseFloat(num1) / parseFloat(num2);
		num1 = "";
		num2 = "";
		num1OrNum2 = 0;
		calcular = function(){};
		numeroUm = function(){};
		dois = function(){};
		tres = function(){};
		quatro = function(){};
		cinco = function(){};
		seis = function(){};
		sete = function(){};
		oito = function(){};
		nove = function(){};
		zero = function(){};
	}
}
function limpar(){
	calcular = saveCalc;
	document.getElementById("result").innerText = "0";
	num1OrNum2 = 1;
	num1 = "";
	num2 = "";
	op = "";
	calcular = saveCalc;
	numeroUm = saveNumeroUm;
	dois = saveDois;
	tres = saveTres;
	quatro = saveQuatro;
	cinco = saveCinco;
	seis = saveSeis;
	sete = saveSete;
	oito = saveOito;
	nove = saveNove;
	zero = saveZero;
}
