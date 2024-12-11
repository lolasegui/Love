const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
        let resultado = JSON.parse(this.response)
		document.getElementById("p").innerHTML = resultado.percentage + "%"
		console.log(resultado);
		if(parseInt(resultado.percentage)<30){
			document.getElementById("foto").src= "../img/asco.png"
			document.getElementById("r").innerHTML= "NO SOIS COMPATIBLES"
		}if(parseInt(resultado.percentage)>30){
			document.getElementById("foto").src="../img/serio.png"
			document.getElementById("r").innerHTML= "PODRIAÍS ESTAR DESTINADOS, PERO NO ES EL CASO"
		}if(parseInt(resultado.percentage)>60){
			document.getElementById("foto").src="../img/655.webp"
			document.getElementById("r").innerHTML= "NO ESTÁ MAL"
		}if(parseInt(resultado.percentage)>75){
			document.getElementById("foto").src="../img/+75.png"
			document.getElementById("r").innerHTML= "¡CÁSATE YA! ES LA PAREJA PERFECTA!"
		}
		document.getElementById("foto").style = "width: 20%"
	} 
});

document.getElementById("calc").addEventListener("click", function(){

let nom1 = document.getElementById("n1").value;
let nom2 = document.getElementById("n2").value;

xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+ nom1+'&fname='+nom2);
xhr.setRequestHeader('x-rapidapi-key', 'c2a390c0aemsh11d7dcee66ebb55p174cbejsn4f5f86038b40');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send();
})