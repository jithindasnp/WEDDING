import { createServer } from 'vite'

const server = await createServer({
  root: 'D:/JD',
  server: { port: 5175, host: true },
})

await server.listen()
server.printUrls()
