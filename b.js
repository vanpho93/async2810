const request = require('request');

function cong(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Invalid input'));
    if (b === 0) return cb(new Error('Divide by zero'));
    const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

// (4 + 5) * 6 / 2

// cong(4, 5, (errTong, tong) => {
//     if (errTong) return console.log(errTong.message);
//     nhan(tong, 6, (errNhan, tich) => {
//         if (errNhan) return console.log(errNhan.message);
//         chia(tich, 2, (errChia, ketQua) => {
//             if (errChia) return console.log(errChia.message);
//             console.log(ketQua);
//         });
//     });
// });

// (x + y) * z / 2
function tinhDienTichHinhThang(x, y, z, cb) {
    cong(x, y, (errTong, tong) => {
        if (errTong) return cb(errTong);
        nhan(tong, z, (errNhan, tich) => {
            if (errNhan) return cb(errNhan);
            chia(tich, 2, (errChia, ketQua) => {
                if (errChia) return cb(errChia);
                cb(null, ketQua);
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 12, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
