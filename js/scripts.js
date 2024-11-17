$(document).ready(function () {
	$("#play-music").click(function () {
		var audio = $("#bg-music")[0];
		if (audio.paused) {
			audio.play();
			$("#play-music").text("Pause Music");
		} else {
			audio.pause();
			$("#play-music").text("Play Music");
		}
	});
});
