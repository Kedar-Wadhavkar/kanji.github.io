function sel(selbck) {	
	selbck.style.color = "#2dcac2";	
	selbck.style.borderColor = "#aaa";

	setTimeout(() => {
		selbck.style.color = "#fff";
		selbck.style.borderColor = "#2dcac2";
	}, 500);
}

function unsel(selbck) {
		selbck.style.color = "#fff";
		selbck.style.borderColor = "#2dcac2";
}