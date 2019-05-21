const request = require("request");

const url =
    "https://api.darksky.net/forecast/585669c0eaac2fbb8fb05cefe3cba272/37.8267,-122.4233?unit=si";

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees celsius out. There is a " + response.body.currently.precipProbability + " chance of rain.");
});