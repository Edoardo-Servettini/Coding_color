console.log("verifica esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = "Oggi è il" + d.toLocaleString();
function elabora(){
let numero = document.getElementById(inNumber).value;
alert("il numero inserito è: " + numero);
}
function reset(){
document.getElementById("inNumber").value = "";	
}