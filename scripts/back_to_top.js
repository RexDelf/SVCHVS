let backToTop = document.getElementById("scroll-to-top");

window.onscroll = function() {scrollFunction(window.innerHeight - 1); hideAudioButton()};

function scrollFunction(wheight) {
    if (document.documentElement.scrollTop > wheight) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}