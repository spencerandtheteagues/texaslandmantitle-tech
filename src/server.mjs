import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
};

export function createStaticServer() {
  return http.createServer((req, res) => {
    const rawUrl = new URL(req.url || '/', 'http://127.0.0.1');
    let pathname = decodeURIComponent(rawUrl.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';

    const resolved = path.resolve(DIST, '.' + pathname);
    if (!resolved.startsWith(DIST)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }

    let target = resolved;
    if (!fs.existsSync(target) && fs.existsSync(path.join(resolved, 'index.html'))) {
      target = path.join(resolved, 'index.html');
    }

    if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(target).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    });
    fs.createReadStream(target).pipe(res);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT || 4320);
  const server = createStaticServer();
  server.listen(port, '127.0.0.1', () => {
    console.log(`texaslandmantitle.tech preview server listening at http://127.0.0.1:${port}/`);
  });
}
