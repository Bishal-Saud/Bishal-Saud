const fs = require('fs')

const data = 'Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.'

fs.writeFileSync('nodejs-architecture.txt',data);