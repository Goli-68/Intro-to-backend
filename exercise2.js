// Adding new routes as part of backend assignment//
const http = require("http");

// Create the webserver
const server = http.createServer((req, res) => {

    // Our routes will go here

// Start the server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
if (req.url === "/about") {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Welcome to my website! This is the about page.");

}
else if (req.url === "/time") {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(new Date().toLocaleTimeString());

}
else if (req.url === "/random-number") {

    const number = Math.floor(Math.random() * 100) + 1;

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(number.toString());

}
else if (req.url === "/user-count") {

    const count = 125;

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({ count: count }));

}
else if (req.url === "/") {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background-color: #f1f5f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .card {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            width: 300px;
        }

        h1 {
            color: #1e293b;
        }

        p {
            color: #64748b;
        }

        .count {
            font-size: 60px;
            font-weight: bold;
            color: #2563eb;
        }

    </style>
</head>

 <body>

    <div class="card">
        <h1>My Website</h1>
        <p>Total registered users:</p>
        <div class="count" id="userCount">
            Loading...
        </div>
        <p>Welcome to our community!</p>
    </div>
        <script>
    fetch("/user-count")
        .then(response => response.json())
        .then(data => {
            document.getElementById("userCount").textContent = data.count;
        });
    </script>
</body>

        </html>
    `);

}
else {

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });

    res.end("Page not found");

}
});
