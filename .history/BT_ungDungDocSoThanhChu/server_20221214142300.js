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
                if (number.number <= 10) {
                    switch (number.number) {
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 1:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 2:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 3:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 4:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 5:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
                            break;
                        case 0:
                            datahtml = datahtml.replace('{str}', 'zero');
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