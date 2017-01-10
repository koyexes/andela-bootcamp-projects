/**
 * Created by koyexes on 1/10/2017.
 */
const request = require('request');

var geocodeAddress = (address, callback) => {
    request({url : 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),json :true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers. Check your internet connection');
        } else {
            switch (body.status) {
                case 'ZERO_RESULTS':
                    callback("Unable to find the specified address.");
                    break;
                default:
                    if (body.results.length === 0) {
                        console.log(body.status);
                        console.log("kindly input an address after the (-a) flag");
                    } else {
                        callback(undefined, {
                            address : body.results[0].formatted_address,
                            latitude : body.results[0].geometry.location.lat,
                            longitude : body.results[0].geometry.location.lng
                        });
                    }
                    break;
            }
        }

    });
};

module.exports = {
    geocodeAddress
};