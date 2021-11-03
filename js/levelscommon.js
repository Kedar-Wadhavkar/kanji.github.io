function sel(selbck) {			
	selbck.style.color = "#2dcac2";	
	selbck.style.boxShadow = "inset -1px -1px 2px rgba(45,202,194,0.8),inset 3px 3px 6px rgba(0,0,0,1)";

	setTimeout(() => {
		selbck.style.color = "#fff";
	selbck.style.boxShadow = "-1px -1px 2px rgba(45,202,194),3px 3px 6px rgba(0,0,0,1)";
	}, 500);
}

function unsel(selbck) {
		selbck.style.color = "#fff";
	selbck.style.boxShadow = "-1px -1px 2px rgba(45,202,194),3px 3px 6px rgba(0,0,0,1)";
}