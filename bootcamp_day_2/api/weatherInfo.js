/**
 * Created by koyexes on 1/10/2017.
 */
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({ url : `https://api.darksky.net/forecast/35137c15d41536e180a00fff85ac6adf/${latitude},${longitude}`,json : true}, (error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.temperature,
                dewPoint: body.currently.dewPoint,
                humidity: body.currently.humidity,
                windSpeed: body.currently.windSpeed,
                windBearing: body.currently.windBearing,
                visibility: body.currently.visibility,
                cloudCover: body.currently.cloudCover,
                pressure: body.currently.pressure,
                ozone: body.currently.ozone
            });
        } else {
            callback('Unable to fetch weather information');
        }
    });
}

module.exports = {
    getWeather
};