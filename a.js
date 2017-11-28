const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

// VIet function, truyen vao ten thanh pho va log ra nhiet do hien tai
function getTemp(cityName, cb) {
    request(URL + cityName, (err, res, body) => {
        const obj = JSON.parse(body);
        cb(obj.main.temp);
    });
}

getTemp('Sydney', temp => {

});

// getTemp('Sydney', temp => console.log('Niet do la: ' + temp));
