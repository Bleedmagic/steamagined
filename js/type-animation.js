var typed1 = new Typed("#text-animation-welcome", {
	strings: [
		"Welcome to <i>Steamagined!</i>",
	],
	loop: false,
	typeSpeed: 60,
	showCursor: true,
	cursorChar: "_",
	contentType: "html",
	startDelay: 2750,
});

function startTypedGoodbye() {
	new Typed("#text-animation-goodbye", {
		strings: [
			"Thank you for visiting <i>Steamagined!</i><br>I hope you enjoyed your stay.<br>Have a nice day~ :)",
		],
		loop: false,
		typeSpeed: 60,
		showCursor: true,
		cursorChar: "_",
		contentType: "html"
	});
}

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				startTypedGoodbye();
				observer.disconnect();
			}
		});
	},
	{ threshold: 0.5 }
);

observer.observe(document.getElementById("text-animation-goodbye"));
