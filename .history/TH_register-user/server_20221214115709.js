const http = require('http');
const fs = require('fs');
const qs = require('qs');

let server = http.createServer(function (req, res) {
    console.log(req.method);
    if (req.method === 'GET') {
        console.log(1);
        fs.readFile('./views/register.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('Register success!');
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});