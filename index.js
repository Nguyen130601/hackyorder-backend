const { connect, addDoc, getPostById, deletePostById, editPostById } = require('./db')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const  cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posts', (req, res) => {
  const { title, content, userId } = req.body
  addDoc({ title, content, userId })
})

app.patch('/posts/:postId', (req, res) => {
  const { postId, title, content } = req.body
  editPostById({ postId, title, content})
})

app.delete('/posts/:postId', (req, res) => {
  const { postId } = req.params
  deletePostById(postId)
})

app.get('/posts', async (req, res) => {
  const data = await connect()
  res.send(data)
})

app.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params
  const data = await getPostById(postId)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})