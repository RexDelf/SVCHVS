const audioBtn = document.querySelector('.unmuted');
const audio = new Audio('audio/track.mp3');
audio.volume = 0.1;
let isMuted = true;

function toggleAudio() {
   isMuted ?  onMute(): onPlay();
   isMuted = !isMuted;
}

function onMute(){
    audioBtn.classList.add('sound-mute');
    audio.pause();
}

function onPlay(){
    audioBtn.classList.remove('sound-mute');
    audio.play();
}

let audioButton = document.getElementById("toggle-audio");

function hideAudioButton() {
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight - window.innerHeight - 100) {
      audioButton.style.display = "none";
    } else {
      audioButton.style.display = "block";
    }   
}