$(document).ready(function () {
	function checkFadeInElements() {
		$(".fade-in").each(function () {
			const elementTop = $(this).offset().top;
			const elementBottom = elementTop + $(this).outerHeight();
			const viewportTop = $(window).scrollTop();
			const viewportBottom = viewportTop + $(window).height();

			if (elementBottom > viewportTop && elementTop < viewportBottom) {
				$(this).addClass("fade-in-visible");
			} else {
				$(this).removeClass("fade-in-visible");
			}
		});
	}
	checkFadeInElements();
	$(window).on("scroll", checkFadeInElements);
});
