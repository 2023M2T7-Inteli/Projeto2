import http from 'http';
import path from 'path';
import fs from 'fs';
import express from 'express';

const __dirname = path.resolve();

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'src', 'public');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(PUBLIC_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function getContentType(extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    default:
      return 'application/octet-stream';
  }
}