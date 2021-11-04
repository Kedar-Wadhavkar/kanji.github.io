const searchFun = () =>{

	let filter = document.getElementById('myInput').value.toUpperCase();

	let myTable = document.getElementById('myTable');

	let tr = myTable.getElementsByTagName('tr');

	for(var i=0; i<tr.length; i++){
	
		let td = tr[i].getElementsByTagName('td')[0];
		let td2 = tr[i].getElementsByTagName('td')[1];
		let td3 = tr[i].getElementsByTagName('td')[2];

		if(td||td2){
			let textValue = td.textContent || td.innerHTML;
			let textValue2 = td2.textContent || td2.innerHTML;
			let textValue3 = td3.textContent || td3.innerHTML;

			if(textValue.indexOf(filter) > -1){
				tr[i].style.display = "";
			}
			else if(textValue2.toUpperCase().indexOf(filter) > -1){
				tr[i].style.display = "";
			}
			else if(textValue3.toUpperCase().indexOf(filter) > -1){
				tr[i].style.display = "";
			}
			else{
				tr[i].style.display = "none";
			}
		}
	}
}



function sel(selbck) {			
	selbck.style.color = "#2dcac2";	
	selbck.style.fontWeight = "bold";	
	selbck.style.backgroundColor = "#2d2d2d";	
	selbck.style.boxShadow = "inset 0px 0px 0px rgba(0,0,0,1),inset 0px 0px 0px rgba(0,0,0,1)";

	setTimeout(() => {
		selbck.style.color = "#fff";
		selbck.style.fontWeight = "normal";
		selbck.style.backgroundColor = "#1f1f1f";	
		selbck.style.boxShadow = "-2px -2px 3px rgba(45,202,194),3px 3px 6px rgba(0,0,0,1)";
	}, 500);
}

function unsel(selbck) {
		selbck.style.color = "#fff";
		selbck.style.fontWeight = "normal";
		selbck.style.backgroundColor = "#1f1f1f";	
		selbck.style.boxShadow = "-2px -2px 3px rgba(45,202,194),3px 3px 6px rgba(0,0,0,1)";
}	

