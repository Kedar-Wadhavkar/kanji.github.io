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