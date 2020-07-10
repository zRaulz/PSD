var songs = ["10. Rupert Holmes - Escape (The Piña Colada Song).mp3", "Parov Stelar - Booty Swing.mp3"];
var song = new Audio();
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var currentTime = document.getElementById("currentTime");


var currentSong = 0;
window.onload = playSong;

function playSong() {
    song.src = songs[currentSong];
    songTitle.textContent = songs[currentSong];
    song.play();

}

function playOrPauseSong() {
    if (song.paused) {
        song.play();
        $("#play img").attr("src", "Pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "Play.png");

    }
}
song.addEventListener('timeupdate', function() {
    var pos = song.currentTime / song.duration;
    fillBar.style.width = pos * 100 + '%';
    convertTime(Math.round(song.currentTime));
});


function convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration));
}

function totalTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;


}

function next() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "Pause.png");
}

function previous() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    playSong();
    $("#play img").attr("src", "Pause.png");
}

function decreaseVolume() {
    song.volume -= 0.20;
}

function increaseVolume() {

    song.volume += 0.20;
}