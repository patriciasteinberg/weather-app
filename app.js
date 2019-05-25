const request = require("request");

const url =
    "https://api.darksky.net/forecast/585669c0eaac2fbb8fb05cefe3cba272/37.8267,-122.4233?unit=si";

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees celsius out. There is a " + response.body.currently.precipProbability + " chance of rain.");
    }
});

//Geocoding
//Address -> Lat/Long -> Weather

const geocodeURL = 
    "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoicGF0cmljaWFzdGVpbmJlcmciLCJhIjoiY2p3M2lnZDEyMTd2YzQ4cXFlanoyZ3NtMyJ9.W6wMUzf4rFwxRnVKlre_kg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
    
    if (error) {
        console.log('Unable to connect to server');
    } else if (response.body.features.length===0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
});