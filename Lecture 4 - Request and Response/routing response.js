const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learning Backend</title></head>');
    res.write('<body><h1>Hello, Welcome to Home</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Learning Backend</title></head>');
    res.write('<body><h1>Check our Products</h1></body>');
    res.write('</html>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Learning Backend</title></head>');
  res.write(`<body><h1>That's all</h1></body>`);
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Hi! Server running on address http://localhost:${PORT}`);
});