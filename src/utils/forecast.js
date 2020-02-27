const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/93de3c8e1c1208b99f2dacb8b513cac1/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unabled to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find weather for location specified.", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.summary} It is currently ${body.currently.temperature} degrees with a ${body.currently.precipProbability} chance of rain. High of ${body.daily.data[0].temperatureHigh}, Low of ${body.daily.data[0].temperatureLow}`
      );
    }
  });
};

module.exports = forecast;
