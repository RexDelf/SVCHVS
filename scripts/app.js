let footerHeight = document.querySelector('footer').offsetHeight / 1.25;
let wheight = window.innerHeight - 1;
let scrollHeight = document.documentElement.scrollHeight;

let storage_lang = 'english';
let storage_theme = 'light';

window.onresize = function() {
    footerHeight = document.querySelector('footer').offsetHeight / 1.25;
    wheight = window.innerHeight - 1;
    scrollHeight = document.documentElement.scrollHeight;
};

window.onscroll = function() {
    checkState();
};

window.onload = function(){
    createSmoothTranstion();
    checkState();
    getLocalStorage();
    changeTheme(storage_theme);
    changeLanguage(storage_lang);
}

window.addEventListener('beforeunload', setLocalStorage);

function checkState(){
    scrollFunction(); 
    hideAudioButton();
}

function setLocalStorage(){
    localStorage.setItem('lang', storage_lang);
    localStorage.setItem('theme', storage_theme);
}

function getLocalStorage(){
    storage_lang = localStorage.getItem('lang');
    storage_theme = localStorage.getItem('theme');
}

function createSmoothTranstion(){
    themedElements.forEach(el => {
        el.classList.add("smooth-theme-transition")
    });
}