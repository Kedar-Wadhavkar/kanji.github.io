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
	selbck.style.transform = "scale(0.94)";

	setTimeout(() => {
		selbck.style.transform = "scale(1)";
	}, 500);
}

function unsel(selbck) {
		selbck.style.transform = "scale(1)";
}



