function down(btn) {
	btn.style.color = "#2dcac2";
	btn.style.fontWeight = "bold";

	setTimeout(() => {
	btn.style.color = "#fff";
	btn.style.fontWeight = "normal";
	}, 500);
}