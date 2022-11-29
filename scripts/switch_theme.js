const themeBtns = document.querySelectorAll('.theme-switch *');
const themedElements = document.querySelectorAll("[data-dark-mode]");

function changeTheme(theme){
    themeBtns.forEach(el => el.classList.remove('switch-hidden'));
    document.querySelector(`.${theme}`).classList.add('switch-hidden');
    storage_theme = theme;
    
    theme === 'light' ? enableLightMode() : enableDarkMode();
}

function enableLightMode(){
    themedElements.forEach(el => {
        let key = el.getAttribute("data-dark-mode");
        el.classList.remove(theme_attributes[key])
    });
}

function enableDarkMode(){
    themedElements.forEach(el => {
        let key = el.getAttribute("data-dark-mode");
        el.classList.add(theme_attributes[key])
    });
}

const theme_attributes = {
    "elem": "dark-mode-element",
    "background": "dark-mode-bg"
}