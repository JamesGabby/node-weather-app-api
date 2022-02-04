const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=af912d950376212113328425447479c0&query=${lat},${long}&units=m`;
    
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to weather services.', undefined)
        } else if (res.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                {
                    weather: res.body.current.weather_descriptions[0], 
                    temperature: res.body.current.temperature,
                    feels_like: res.body.current.feelslike
                }
            )
        }
    });
}

module.exports = forecast;