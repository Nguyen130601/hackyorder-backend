const express = require('express')
const app = express()
const port = process.env.PORT || 3000
import cors from 'cors'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})