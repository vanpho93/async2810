const request = require('request');

function cong(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid input'));
        const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request(URL, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function nhan(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid input'));
        const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        request(URL, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function chia(a, b) {
    return new Promise((resolve, reject) => {
        if (b == 0) return reject(new Error('Divide by zero'));
        if (isNaN(a) || isNaN(b)) return reject(new Error('Invalid input'));
        const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        request(URL, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

cong(1, 2)
.then(result => console.log(result))
.catch(err => console.log(err));
