const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=af912d950376212113328425447479c0&query=37.8267,-122.4233&units=m';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFtZXNnYWJieSIsImEiOiJja3o2MzhsY28wN3luMnBzOGRwcmxkcGVpIn0.Q4yrDXiS0vSXY8CgkJJpKQ';

request({ url: url, json: true }, (err, res) => {
    console.log(`Right now the weather is ${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees celcius out but it feels like ${res.body.current.feelslike} degrees celcius.`);
});

request({ url: geoUrl, json: true }, (err, res) => {
    console.log(`Latitude: ${res.body.features[0].center[0]}. Longitude: ${res.body.features[0].center[1]}.`);
});