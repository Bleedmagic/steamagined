// Select all elements with the 'fade-in' class
const elements = document.querySelectorAll(".fade-in");

function handleScroll() {
	elements.forEach((element) => {
		const rect = element.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom >= 0) {
			element.classList.add("visible"); // Add 'visible' when in the viewport
		}
	});
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Initial check in case elements are already in view on page load
handleScroll();
