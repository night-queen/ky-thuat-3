/**
 * Static development server — zero dependencies.
 *
 *   node tools/dev-server.mjs            serve the repo root
 *   node tools/dev-server.mjs --root dist  serve a built copy
 *
 * Honours $PORT (Figma Make sets it; defaults to 8443) and binds 0.0.0.0 so
 * the preview panel and other devices on the network can reach it.
 */
import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { extname, join, normalize, resolve, sep } from 'node:path'

const argv = process.argv.slice(2)
const rootFlag = argv.indexOf('--root')
const ROOT = resolve(process.cwd(), rootFlag !== -1 ? (argv[rootFlag + 1] ?? '.') : '.')
const PORT = Number.parseInt(process.env.PORT || '8443', 10)
const HOST = '0.0.0.0'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
}

/** Resolve a URL path to a file inside ROOT, or null if it escapes the root. */
function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0])
  const candidate = resolve(ROOT, '.' + normalize(decoded))
  if (candidate !== ROOT && !candidate.startsWith(ROOT + sep)) return null
  return candidate
}

async function findFile(path) {
  try {
    const info = await stat(path)
    if (info.isDirectory()) return findFile(join(path, 'index.html'))
    return path
  } catch {
    return null
  }
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { allow: 'GET, HEAD' }).end('Method Not Allowed')
    return
  }

  const requested = resolvePath(req.url || '/')
  const file = requested && (await findFile(requested))

  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('404 Not Found')
    return
  }

  res.writeHead(200, {
    'content-type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
    // Source files change constantly in development — never let them stick.
    'cache-control': 'no-cache',
  })

  if (req.method === 'HEAD') {
    res.end()
    return
  }

  createReadStream(file)
    .on('error', () => res.end())
    .pipe(res)
})

server.listen(PORT, HOST, () => {
  console.log(`Serving ${ROOT}`)
  console.log(`  http://localhost:${PORT}/`)
})
