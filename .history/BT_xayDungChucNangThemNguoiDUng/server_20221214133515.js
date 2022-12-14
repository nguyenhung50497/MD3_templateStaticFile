let http = require('http');
let fs = require('fs');
let formidable = require('formidable');

let users = [];

let server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let form = new formidable.IncomingForm();
        // form.uploadDir = "upload/"
        form.parse(req, function (err, fields, files) {
            let userInfo = {
                name: fields.name,
                email: fields.email,
                phone: fields.phone,
                address: fields.address,
            };

            if (err) {
                console.error(err.message);
                return res.end(err.message);
            }
            users.push(userInfo);
            console.log(users)
            return res.end('Register success!');
        });
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});