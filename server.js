import express from 'express'
import path from 'path'
import url from 'url'
import http from 'http'
import { Server as WebSocketServer } from 'ws'

const server = http.createServer()
const wss = WebSocketServer({ server })
const app = express()
const appPath = path.resolve(__dirname, '')
const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000

app.use(express.static(appPath))

wss.on('connection', (ws) => {
  console.log('connected:', ws)
  const location = url.parse(ws.upgradeReq.url, true)

  ws.on('message', (msg) => {
    console.log('received:', msg)
  })

  ws.send('something')
})

server.on('request', app)
server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`)
})
