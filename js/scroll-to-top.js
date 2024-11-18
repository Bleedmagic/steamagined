$(window).scroll(function () {
	if ($(document).height() - $(window).scrollTop() - $(window).height() < 10) {
		$("#scrollToTopBtn").fadeIn();
	} else {
		$("#scrollToTopBtn").fadeOut();
	}
});
$("#scrollToTopBtn").click(function () {
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
