// index.js
const http = require("http");
http.createServer((req, res) => {
  res.write("Hello from DevOps!");
  res.end();
}).listen(3000);