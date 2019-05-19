const request = require('request');

const url = 'https://api.darksky.net/forecast/585669c0eaac2fbb8fb05cefe3cba272/37.8267,-122.4233';

request({
    url: url
}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});