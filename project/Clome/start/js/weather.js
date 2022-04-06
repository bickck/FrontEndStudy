const API_KEY = "07bab4b05c1386dd4bc23f3cf9bce594";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lo = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lo}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data=>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for youy")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);