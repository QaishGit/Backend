const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);


  if(req.url.toLowerCase() === '/home'){
    res.setHeader('Context-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice</title></head>');
    res.write(`<body><h1>Welcome to Home</h1></body>`);
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/men'){
    res.setHeader('Context-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice</title></head>');
    res.write(`<body><h1>Welcome to Men's Section</h1></body>`);
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/women'){
    res.setHeader('Context-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice</title></head>');
    res.write(`<body><h1>Welcome to Women's Section</h1></body>`);
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/kids'){
    res.setHeader('Context-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice</title></head>');
    res.write(`<body><h1>Welcome to Men's Section</h1></body>`);
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/cart'){
    res.setHeader('Context-Type', 'text/html');
    res.write(
      `<html>
        <head><title>Practice</title></head>
        <body>
          <h1>Welcome to Cart</h1>
        </body>
      </html>`);
    return res.end();
  }

  res.setHeader('Context-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Practice</title></head>');
  res.write(`<body><a href='/home'>Home</a><br>`);
  res.write(`<body><a href='/men'>Men</a><br>`);
  res.write(`<a href='/women'>Women</a><br>`);
  res.write(`<a href='/kids'>Kids</a><br>`);
  res.write(`<a href='/cart'>Cart</a></body>`);
  res.write('</html>');
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on address https://localhost:${PORT}`);
});