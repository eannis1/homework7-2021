var video = document.querySelector("#player1")
// If using classes, could grab the wrong one by mistake, so IDs = better if possible

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	// video.playbackRate = video.playbackRace * .95;
	video.playbackRate *=.95;
	// Same as above
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=0.95;
	console.log("New speed is "+video.playbackRate )
});

// skip ahead - need to go back to beginning if exceed time of video. If/else?
document.querySelector("#skip").addEventListener("click", function() { 
	video.currentTime += 15;
	console.log("Location is "+video.currentTime );
	video.loop = true;
	video.play();
});

// video.loop = true;
// video.play();

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		console.log("Unmute video")
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	} else if (video.muted == false) {
		console.log("Mute video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value)
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%"
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});