const request = require('request');

function cong(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    if (b === 0) return cb(new Error('Divide by zero'));
    const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

cong(10, 5, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
