var typed1 = new Typed("#text-animation-typing-1", {
	strings: [
		"Welcome to <i>Steamagined</i>.<br> A portfolio focused on my Steam gaming!<br>Feel free to explore~ :D",
	],
	loop: false,
	typeSpeed: 60,
	showCursor: true,
	cursorChar: "_",
	contentType: "html",
	startDelay: 2750,
});

function startTyped2() {
	var typed2 = new Typed("#text-animation-typing-2", {
		strings: [
			"Thank you for visiting <i>Steamagined</i>!<br>I hope you enjoyed your stay.<br>Have a nice day~ :)",
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
				startTyped2();
				observer.disconnect();
			}
		});
	},
	{ threshold: 0.5 }
);

observer.observe(document.getElementById("text-animation-typing-2"));
