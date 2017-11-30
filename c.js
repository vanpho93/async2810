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
/*
function tinhDienTichHinhThang(a, b, h) {
    return cong(a, b)
    .then(tong => nhan(tong, h))
    .then(tich => chia(tich, 2))
}

tinhDienTichHinhThang(4, 5, 12)
.then(kq => console.log(kq))
.catch(err => console.log(err));
*/
async function tinhDienTichHinhThang(a, b, h) {
    const tong = await cong(a, b);
    const tich = await nhan(tong, h);
    const kq = await chia(tich, 2);
    return kq;
}

tinhDienTichHinhThang(4, 5, 6)
.then(kq => console.log(kq))
.catch(err => console.log(err));