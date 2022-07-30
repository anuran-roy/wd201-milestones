const fs = require('fs');

fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module.",
    function (err) {
        if (err) {
            throw err;
        }
        console.log("File created successfully.");
    }
)