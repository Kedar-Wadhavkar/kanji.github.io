const searchFun = () =>{

	let filter = document.getElementById('myInput').value.toUpperCase();

	let myTable = document.getElementById('myTable');

	let tr = myTable.getElementsByTagName('tr');

	for(var i=0; i<tr.length; i++){
	
		let td = tr[i].getElementsByTagName('td')[0];
		let td2 = tr[i].getElementsByTagName('td')[1];

		if(td||td2){
			let textValue = td.textContent || td.innerHTML;
			let textValue2 = td2.textContent || td2.innerHTML;

			if(textValue.indexOf(filter) > -1){
				tr[i].style.display = "";
			}
			else if(textValue2.toUpperCase().indexOf(filter) > -1){
				tr[i].style.display = "";
			}
			else{
				tr[i].style.display = "none";
			}
		}
	}
}



function sel(selbck) {		
	selbck.style.opacity = "1";
	selbck.style.backgroundColor = "rgba(255,255,255,0.2)";
	selbck.style.borderRadius = "8px";
	selbck.style.color = "#fff"

	setTimeout(() => {
		selbck.style.backgroundColor = "rgba(255,255,255,0.9)";
		selbck.style.color = "#000";
	}, 500);
}

