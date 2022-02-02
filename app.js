const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=af912d950376212113328425447479c0&query=37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
    console.log(res.body.current);
});