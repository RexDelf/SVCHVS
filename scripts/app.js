const API_URL = "https://api.flickr.com/services/rest/";
const API_KEY = "ecb3fb49c79846a95515e819fb1591e3";
const imagesElement = document.querySelector(".image-collection");
const searchBar = document.querySelector(".searchbar input");
const template = document.querySelector("#image-card");

let options = { 
    "api_key": API_KEY,
    "method": "flickr.photos.search",
    "format": "json",
    "text": "",
    "nojsoncallback": 1
  }

async function getPhotos(input) {
    if(input){
        options.text = input;
    }

    imagesElement.innerHTML = "";

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

    const result=await data.json();

    var _s = result.photos.photo;
    for(var z = 0 ; z < result.photos.photo.length ; z++)
    {
        var currentURL = 'https://live.staticflickr.com/'+_s[z]['server']+'/'+_s[z]['id']+'_'+_s[z]['secret']+'_w.jpg';
        let imgCard = template.content.cloneNode(true);
        imgCard.querySelector("img").src = currentURL;
        imgCard.querySelector(".img-title").innerHTML = _s[z]['title'];
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