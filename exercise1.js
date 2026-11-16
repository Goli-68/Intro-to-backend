

// 1. Import Node.js HTTP module
const http = require("http");

// 2. The home route
function home() {
    return "Hello World!";
}

// 3. The current year route
function currentYear() {
    return new Date().getFullYear().toString();
}

// 4. Create the webserver
const server = http.createServer((req, res) => {

    // Check which URL the user visits
    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(home());

    } else if (req.url === "/currentYear") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(currentYear());

    } else {

        // If the URL doesn't exist
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page not found");

    }

});

// 5. Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
