let http = require('http');
let fs = require('fs');
const qs = require('qs')

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
                let a = parseInt(number.number);
                console.log();
                if (a <= 10) {
                    switch (a) {
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 1:
                            datahtml = datahtml.replace('{str}', 'one');
                            break;
                        case 2:
                            datahtml = datahtml.replace('{str}', 'two');
                            break;
                        case 3:
                            datahtml = datahtml.replace('{str}', 'three');
                            break;
                        case 4:
                            datahtml = datahtml.replace('{str}', 'four');
                            break;
                        case 5:
                            datahtml = datahtml.replace('{str}', 'five');
                            break;
                        case 6:
                            datahtml = datahtml.replace('{str}', 'six');
                            break;
                        case 7:
                            datahtml = datahtml.replace('{str}', 'seven');
                            break;
                        case 8:
                            datahtml = datahtml.replace('{str}', 'eight');
                            break;
                        case 9:
                            datahtml = datahtml.replace('{str}', 'nine');
                            break;
                        case 10:
                            datahtml = datahtml.replace('{str}', 'ten');
                            break;
                    }
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