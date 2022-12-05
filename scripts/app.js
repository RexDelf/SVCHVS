const API_URL = "https://api.flickr.com/services/rest/";
const API_KEY = "ecb3fb49c79846a95515e819fb1591e3";
const imagesElement = document.querySelector(".image-collection");
const searchBar = document.querySelector(".searchbar input");
const template = document.querySelector("#image-card");
let currentPage = 1;
let lastInput = "";

let options = { 
    "api_key": API_KEY,
    "method": "flickr.photos.search",
    "format": "json",
    "text": "",
    "nojsoncallback": 1,
    "page": currentPage
}

async function getPhotos(input, page) {
    if(input !== lastInput){
        imagesElement.innerHTML = "";
    }
    
    if(input){
        options.text = input;
        lastInput = input;
        options.page = page;
        currentPage = page;
    }

    let url = createURL();

    const data = await fetch(
        url, 
        {
            method:"GET",
            headers : {
            Accept: "application/json",
            }
        }
    );

    const result = await data.json();

    var images = result.photos.photo;
    for(var i = 0 ; i < result.photos.photo.length ; i++)
    {
        var currentURL = 'https://live.staticflickr.com/'+images[i]['server']+'/'+images[i]['id']+'_'+images[i]['secret']+'_w.jpg';
        let imgCard = template.content.cloneNode(true);
        imgCard.querySelector("img").src = currentURL;
        imgCard.querySelector(".img-title").innerHTML = images[i]['title'];
        imagesElement.appendChild(imgCard);
    } 
};

function clearSearchField(){
    searchBar.value = "";
}

function createURL(){
    let url = API_URL;

    first = true;

    for (item in options) {
        if (options.hasOwnProperty(item)) {
        url += (first ? "?" : "&") + item + "=" + options[item];
        first = false;
        }
    }

    return url;
}

searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
    if (event.key === "Escape") {
        event.preventDefault();
        clearSearchField();
    }
});

window.onload = function () {
    searchBar.focus();
    searchBar.select();
}

window.onscroll = function(event) {
    if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
        event.preventDefault();
        getPhotos(lastInput, ++currentPage);
    }
};