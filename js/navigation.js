let btnBack = document.getElementById("back");

btnBack.addEventListener('click', () => {
	window.history.back();
});



function imgdown1(selimg) {	
	selimg.style.transform = "scale(0.9)";

	setTimeout(() => {
		selimg.style.transform = "scale(1)";
	}, 500);
}
function imgup1(selimg) {
		selimg.style.transform = "scale(1)";
}


function imgdown2(selimg2) {	
	selimg2.style.transform = "scale(0.9)";

	setTimeout(() => {
		selimg2.style.transform = "scale(1)";
	}, 500);
}
function imgup2(selimg2) {
		selimg2.style.transform = "scale(1)";
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