var newimg1 = document.getElementById("b1");
var i1 = document.getElementById("i1");

function imgdown1() {	
	i1.style.backgroundColor = "rgba(0,0,0)";	
	newimg1.src = "js/media/rad_click.png";

	setTimeout(() => {
		i1.style.backgroundColor = "#2dcac2";	
		newimg1.src = "js/media/radical.png";
	}, 500);
}
function imgup1() {
		i1.style.backgroundColor = "#2dcac2";	
		newimg1.src = "js/media/radical.png";
}


var newimg2 = document.getElementById("b2");
var i2 = document.getElementById("i2");

function imgdown2() {	
	i2.style.backgroundColor = "rgba(0,0,0)";	
	newimg2.src = "js/media/level_click.png";

	setTimeout(() => {
		i2.style.backgroundColor = "#2dcac2";	
		newimg2.src = "js/media/level.png";
	}, 500);
}
function imgup2() {
		i2.style.backgroundColor = "#2dcac2";	
		newimg2.src = "js/media/level.png";
}


var newimg3 = document.getElementById("b3");
var i3 = document.getElementById("i3");

function imgdown3() {	
	i3.style.backgroundColor = "rgba(0,0,0)";	
	newimg3.src = "js/media/level_click.png";

	setTimeout(() => {
		i3.style.backgroundColor = "#2dcac2";	
		newimg3.src = "js/media/list.png";
	}, 500);
}
function imgup3() {
		i3.style.backgroundColor = "#2dcac2";	
		newimg3.src = "js/media/list.png";
}