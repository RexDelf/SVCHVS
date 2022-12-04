const API_URL = "https://api.flickr.com/services/rest/";
const API_KEY = "ecb3fb49c79846a95515e819fb1591e3";
const imagesElement = document.querySelector(".image-collection");

let options = { 
    "api_key": API_KEY,
    "method": "flickr.photos.search",
    "format": "json",
    "text": "marvel",
    "nojsoncallback": 1
  }

async function getPhotos() {

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
        var CurrentPhotoUrl = 'https://live.staticflickr.com/'+_s[z]['server']+'/'+_s[z]['id']+'_'+_s[z]['secret']+'_q.jpg';
        let el = document.createElement("img");
        el.src = CurrentPhotoUrl;
        imagesElement.appendChild(el);
    } 
};

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

getPhotos();