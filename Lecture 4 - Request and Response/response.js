const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Learning Backend</title></haed>');
  res.write('<body><h1>Hello World</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Hi! Server running on address http://localhost:${PORT}`);
});