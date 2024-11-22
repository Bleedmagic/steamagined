let isScrolling = false;

$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$("#scrollToTopBtn").fadeIn();
	} else {
		$("#scrollToTopBtn").fadeOut();
	}
});

$("#scrollToTopBtn").click(function () {
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).keydown(function (e) {
	if (!isScrolling) {
		if (e.key === "ArrowUp") {
			isScrolling = true;
			$("html, body").animate({ scrollTop: 0 }, "slow", function () {
				isScrolling = false;
			});
		}
	}
});
