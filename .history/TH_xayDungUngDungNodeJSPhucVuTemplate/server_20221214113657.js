const http = require('http');
const fs = require('fs');

let server = http.createServer(((req, res) => {
    // code
}));

server.listen('8080', function () {
    console.log(`Server running in http://localhost:8080`)
});

