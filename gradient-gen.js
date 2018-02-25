var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btn_rnd");


color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);
button.addEventListener("click",randomBackground);


function changeBackground(){


	body.style.background = "linear-gradient(to right, " + color1.value+", "+color2.value +")";

	css.textContent = body.style.background +";"
}


function randomBackground(){

	var c1 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	var c2 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);

	body.style.background = "linear-gradient(to right, " + c1+", "+c2 +")";
	color1.value = c1;
	color2.value = c2;
	css.textContent = body.style.background +";"
}