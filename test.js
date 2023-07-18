function calculateDaysBetweenDates(begin, end) {
    const millisecondsPerDay = 86400000;
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const difference = Math.abs(endDate - beginDate);
    return Math.round(difference / millisecondsPerDay);
}

// find all images without alternate text
// and give them a red border
function process() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].alt) {
            images[i].style.outline = '5px solid red';
        }
    }
}

// Express server on port 3000
// Path: server.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


// Node.js
// Path: node.js
const http = require('http');
const hostname = 'jin';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Return the current time
// Path: time.js
function getTime() {
    const date = new Date();
    return date.toLocaleTimeString('en-US', { hour12: false });
}



