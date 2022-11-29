const themeBtns = document.querySelectorAll('.theme-switch *');
const themedElements = document.querySelectorAll("[data-dark-mode]");
const themedImages = document.querySelectorAll("[data-img]");
const sabImage = document.querySelector('.single-img img');

function changeTheme(theme){
    themeBtns.forEach(el => el.classList.remove('switch-hidden'));
    document.querySelector(`.${theme}`).classList.add('switch-hidden');
    storage_theme = theme;
    
    theme === 'light' ? enableLightMode(theme) : enableDarkMode(theme);
}

function enableLightMode(theme){
    themedElements.forEach(el => {
        let key = el.getAttribute("data-dark-mode");
        el.classList.remove(theme_attributes[key]);
    });

    themedElements.forEach(el => {
        let key = el.getAttribute("data-img");
        el.src = theme_images[theme][key];
    });
}

function enableDarkMode(theme){
    themedElements.forEach(el => {
        let key = el.getAttribute("data-dark-mode");
        el.classList.add(theme_attributes[key]);
    });

    themedElements.forEach(el => {
        let key = el.getAttribute("data-img");
        el.src = theme_images[theme][key];
    });
}

const theme_images = {
    "light": {
        "sab": "img/pictures/sab-desktop.png",
        "lrg": "img/pictures/lrg-desktop.png",
        "tsowf": "img/pictures/tsowf-desktop.png",
        "cts": "img/pictures/cts-desktop.png",
        "lotos": "img/pictures/lotos-desktop.png"
    },
    "dark": {
        "sab": "img/pictures/darkmode/sab-dm.jpg",
        "lrg": "img/pictures/darkmode/lrg-dm.jpg",
        "tsowf": "img/pictures/darkmode/tsowf-dm.jpg",
        "cts": "img/pictures/darkmode/cts-dm.jpg",
        "lotos": "img/pictures/darkmode/lotos-dm.jpg"
    }
}

const theme_attributes = {
    "elem": "dark-mode-element",
    "background": "dark-mode-bg"
}