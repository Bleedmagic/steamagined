$(document).ready(function () {
	$("body").css("overflow", "hidden");

	setTimeout(function () {
		$("#preloader").fadeOut();
		$("body").css("overflow", "auto");
		$("html, body").animate({ scrollTop: 0 }, "fast");
	}, 2500);
});
