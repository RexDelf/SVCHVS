let backToTop = document.getElementById("scroll-to-top");

function scrollFunction() {
    if (document.documentElement.scrollTop > wheight && document.documentElement.scrollTop < scrollHeight - wheight - footerHeight) {
        backToTop.classList.remove("controls-hidden");
    } else {
        backToTop.classList.add("controls-hidden");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}