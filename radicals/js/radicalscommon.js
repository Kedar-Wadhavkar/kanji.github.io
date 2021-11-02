function sel(selbck) {	
	selbck.style.backgroundColor = "rgba(255,255,255,0.2)";	
	selbck.style.color = "#fff";	

	setTimeout(() => {
		selbck.style.color = "#000";
		selbck.style.backgroundColor = "rgba(255,255,255,0.9)";
	}, 500);
}

function unsel(selbck) {
		selbck.style.color = "#000";
		selbck.style.backgroundColor = "rgba(255,255,255,0.9)";
}