document.addEventListener("DOMContentLoaded", function () {
	var popup = document.getElementById("popup");
	var popupClose = document.getElementById("popup-close");

	popupClose.addEventListener("click", function () {
		popup.style.display = "none";
	});

	setTimeout(function () {
		popup.style.opacity = "0";
	}, 5000);
});
