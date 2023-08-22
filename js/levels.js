function sel(selbck) {			
	selbck.style.transform = "scale(0.92)";

	setTimeout(() => {
		selbck.style.transform = "scale(1)";
	}, 500);
}

function unsel(selbck) {
		selbck.style.transform = "scale(1)";
}

