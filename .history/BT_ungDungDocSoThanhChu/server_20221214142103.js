let http = require('http');
let fs = require('fs');
const qs = require('qs')
let formidable = require('formidable');

let server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const number = qs.parse(data);
            fs.readFile('./views/index.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{str}', number.number);
                if (number.number <) {

                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});