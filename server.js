const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(ROOT, cleanUrl === '/' ? 'index.html' : cleanUrl);

  if (cleanUrl.endsWith('/')) {
    filePath = path.join(ROOT, cleanUrl, 'index.html');
  } else if (!path.extname(filePath)) {
    filePath += '.html';
  }

  const ext = path.extname(filePath) || '.html';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
