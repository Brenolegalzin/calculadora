function soma(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1+num2;
}
function diminuir(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1-num2;
}
function multiplicar(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1*num2;
}
function dividir(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = num1/num2;
}
