const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 4173);
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const ROUTE_FILES = {
  "/": path.join(PUBLIC_DIR, "dashboard", "index.html"),
  "/dashboard": path.join(PUBLIC_DIR, "dashboard", "index.html"),
  "/directory": path.join(PUBLIC_DIR, "directory", "index.html"),
  "/uploader": path.join(PUBLIC_DIR, "uploader", "index.html"),
  "/detail": path.join(PUBLIC_DIR, "detail", "index.html"),
  "/checkout": path.join(PUBLIC_DIR, "checkout", "index.html"),
};

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const cleanPath = url.pathname.replace(/\/+$/, "") || "/";

  if (ROUTE_FILES[cleanPath]) {
    sendFile(res, ROUTE_FILES[cleanPath]);
    return;
  }

  const baseDir = cleanPath.startsWith("/screens/") ? ROOT : PUBLIC_DIR;
  const relPath = cleanPath.startsWith("/screens/") ? cleanPath.slice(1) : cleanPath.slice(1);
  const candidate = path.resolve(baseDir, relPath);

  if (!candidate.startsWith(baseDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(candidate, (err, stat) => {
    if (!err && stat.isFile()) {
      sendFile(res, candidate);
      return;
    }
    if (!err && stat.isDirectory()) {
      sendFile(res, path.join(candidate, "index.html"));
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`spykey-agent dev server listening at http://localhost:${PORT}`);
});
