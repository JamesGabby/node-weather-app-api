const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const locationCLI = process.argv[2];

if (!locationCLI) {
    console.log('Please provide an address.');
} else {
    geocode(locationCLI, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(location, forecastData);
        })
    });
}
