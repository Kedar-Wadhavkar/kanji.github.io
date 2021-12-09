let btnBack = document.getElementById("back");

btnBack.addEventListener('click', () => {
	window.history.back();
});



var newimg1 = document.getElementById("bck");
var newimg2 = document.getElementById("hom");

function imgdown1(selimg) {	
	selimg.style.backgroundColor = "rgba(0,0,0,0)";	
	newimg1.src = "js/backarr2.png";

	setTimeout(() => {
		selimg.style.backgroundColor = "#2dcac2";	
		newimg1.src = "js/backarr.png";
	}, 500);
}
function imgup1(selimg) {
		selimg.style.backgroundColor = "#2dcac2";	
		newimg1.src = "js/backarr.png";
}


function imgdown2(selimg2) {	
	selimg2.style.backgroundColor = "rgba(0,0,0,0)";	
	newimg2.src = "js/homebtn2.png";

	setTimeout(() => {
		selimg2.style.backgroundColor = "#2dcac2";	
		newimg2.src = "js/homebtn.png";
	}, 500);
}
function imgup2(selimg2) {
		selimg2.style.backgroundColor = "#2dcac2";	
		newimg2.src = "js/homebtn.png";
}



var i1 = document.getElementById("i1");

function botimgdown1() {	
	i1.style.transform = "scale(0.9)";

	setTimeout(() => {
		i1.style.transform = "scale(1)";
	}, 500);
}
function botimgup1() {
		i1.style.transform = "scale(1)";
}


var i2 = document.getElementById("i2");

function botimgdown2() {	
	i2.style.transform = "scale(1.2)";

	setTimeout(() => {
		i2.style.transform = "scale(1)";
	}, 500);
}
function botimgup2() {
		i2.style.transform = "scale(1)";
}


var i3 = document.getElementById("i3");

function botimgdown3() {	
	i3.style.transform = "scale(1.2)";

	setTimeout(() => {
		i3.style.transform = "scale(1)";
	}, 500);
}
function botimgup3() {
		i3.style.transform = "scale(1)";
}