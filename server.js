const http = require("node:http"); //node.js

const hostname = "localhost"; //localhost
const port = 3000; //port
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n HoiDanIT with Eric");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
