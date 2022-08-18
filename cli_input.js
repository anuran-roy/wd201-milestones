const fs = require("fs");
const readline = require("readline");
const http = require("http");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// lineDetail.question(`Please provide your name: `, (name) => {
//     console.log(`Hello ${name}`);
//     lineDetail.close();
// });

lineDetail.question(`Please provide your name: `, (path) => {
  const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(path);
    stream.pipe(res);
  });
  lineDetail.close();
  server.listen(3000);
});
