const searchFun = () =>{

	let filter = document.getElementById('myInput').value;

	let myTable1 = document.getElementById('myTable1');
	let tr1 = myTable1.getElementsByTagName('tr');

	for(var i=0; i<tr1.length; i++){
	
		let td1 = tr1[i].getElementsByTagName('td')[0];

		if(td1){

			let textValue1 = td1.textContent || td1.innerHTML;

			if(textValue1.indexOf(filter) > -1){
				tr1[i].style.display = "";
			}
			else{
				tr1[i].style.display = "none";
			}
		}
	}


	let myTable2 = document.getElementById('myTable2');
	let tr2 = myTable2.getElementsByTagName('tr');

	for(var j=0; j<tr2.length; j++){
	
		let td2 = tr2[j].getElementsByTagName('td')[0];

		if(td2){

			let textValue2 = td2.textContent || td2.innerHTML;

			if(textValue2.indexOf(filter) > -1){
				tr2[j].style.display = "";
			}
			else{
				tr2[j].style.display = "none";
			}
		}
	}
}


function sel(selbck) {	
	selbck.style.backgroundColor = "rgba(255,255,255,0.2)";	
	selbck.style.color = "#2dcac2";	
	selbck.style.fontWeight = "bold";

	setTimeout(() => {
		selbck.style.color = "#fff";
		selbck.style.backgroundColor = "#1f1f1f";
		selbck.style.fontWeight = "normal";
	}, 500);
}

function unsel(selbck) {
		selbck.style.color = "#fff";
		selbck.style.backgroundColor = "#1f1f1f";
		selbck.style.fontWeight = "normal";
}


