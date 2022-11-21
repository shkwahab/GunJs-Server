import express from 'express'
import Gun from 'gun'
import cors from 'cors'

const app = express()
const port = 3030

app.use(cors())

app.use(Gun.serve)

app.get('/', (_, res) => {
  res.status(200).send('> DEBUG: Abide Inspire Node is Live')
})

const server = app.listen(port, () => {
  console.log(`> DEBUG: Abide Inspire Node is listening at http://localhost:${port}`)
})

Gun({ web: server })
