const buttons = document.querySelectorAll('.nav-row a');

function clicked(btn){
    buttons.forEach(el => el.classList.remove('nav-btn-enabled'));
    btn.classList.add('nav-btn-enabled');
}