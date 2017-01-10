/**
 * Created by koyexes on 1/10/2017.
 */
const yargs = require('yargs');

const geocode = require('./coordinates');
const weather = require('./weatherInfo');

const argv = yargs
    .options({
        a: {
            demand : true,
            alias: 'Address',
            describe: 'Address to fetch weather information about',
            string: true
        }
    }).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.Address.toString(), (errorMessage, geoResults) => {

    if (errorMessage) {
        console.log(errorMessage);
        return errorMessage;
    } else {
        weather.getWeather(geoResults.latitude, geoResults.longitude, (error, results ) => {
            if (error) {
                console.log(error)
            } else {
                console.log("\n");
                console.log(`The geographical and weather information for the inputed address (${argv.Address.toString()}) is as follows:`);
                console.log("\n");
                console.log("Geographical Information: ", JSON.stringify(geoResults, undefined, 4) );
                console.log("\n");
                console.log("Weather Information: ", JSON.stringify(results, undefined, 4) );
            }
        });

    }
});
