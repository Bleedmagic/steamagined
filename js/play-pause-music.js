const playButton = document.getElementById("play-music");
const music = document.getElementById("bg-music");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

playButton.addEventListener("click", function () {
	toggleMusic();
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") {
		event.preventDefault();
		toggleMusic();
	}
});

function toggleMusic() {
	if (music.paused) {
		music.play();
		playIcon.classList.add("d-none");
		pauseIcon.classList.remove("d-none");
	} else {
		music.pause();
		playIcon.classList.remove("d-none");
		pauseIcon.classList.add("d-none");
	}
}
