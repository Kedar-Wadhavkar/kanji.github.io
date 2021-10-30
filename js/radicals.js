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


function down2(btn) {		
	btn.style.backgroundColor = "rgba(255,255,255,0.15)";	
	btn.style.color = "#fff";

	setTimeout(() => {
		btn.style.color = "#000";
		btn.style.backgroundColor = "rgba(255,255,255,0.9)";
	}, 500);
}


