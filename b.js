const request = require('request');

function cong(a, b, cb) {
    const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

cong(10, 5, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
