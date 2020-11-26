const weather = document.querySelector(".js-weather");

const API_KEY = "e3655d35bc929dc2b8e8bbb0ca9644f3";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp,
                place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude,
        longitude  = position.coords.longitude,
        coordsObj = {
            latitude,
            longitude
        };
        saveCoords(coordsObj);
        getWeather();

}

function handleGeoError() {
    console.log("cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadcoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }   
}

function init() {
    loadcoords();
}
init();