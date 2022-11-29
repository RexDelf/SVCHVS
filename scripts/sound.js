const audioBtn = document.querySelector('.unmuted');
const audio = new Audio('audio/track.mp3');
let audioButton = document.getElementById("toggle-audio");

audio.volume = 0.1;
let isMuted = true;

function toggleAudio() {
    isMuted = !isMuted; 
    isMuted ?  audio.pause(): audio.play();
    audioBtn.classList.toggle('sound-mute');
}

function hideAudioButton() {
    if (document.documentElement.scrollTop > scrollHeight - wheight - footerHeight) {
    document.getElementById("toggle-audio").classList.add("controls-hidden");
    } else {
    document.getElementById("toggle-audio").classList.remove("controls-hidden");
    }   
}