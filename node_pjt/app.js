const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
window.addEventListener('load', () => {
    var app = {
        pollLogo: document.querySelectorAll('.poll-logo'),
        frameworks: ['Angular', 'Ember', 'React', 'Vue']
    }

    // Sends a POST request to the
    // server using axios
    app.handlePollEvent = function(event, index) {
        const framework = this.frameworks[index];
        axios.post('http://localhost:3000/vote', { framework: framework })
            .then((data) => {
                alert(`Voted ${framework}`);
            })
    }

    // Sets up click events for
    // all the cards on the DOM
    app.setup = function() {
        this.pollLogo.forEach((pollBox, index) => {
            pollBox.addEventListener('click', (event) => {
                // Calls the event handler
                this.handlePollEvent(event, index)
            }, true)
        })
    }

    app.setup();

})