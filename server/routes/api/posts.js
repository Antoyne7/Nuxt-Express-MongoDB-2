const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get
router.get('/', async (req, res) => {
  const posts = await loadPosts()
  res.send(await posts.find({}).toArray())
})

// Add
router.post('/', async (req, res) => {
  const posts = await loadPosts()
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  })
  res.status(201).send()
})

// Remove
router.delete('/:id', async (req, res) => {
  const posts = await loadPosts()
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
  res.status(200).send()
})

async function loadPosts () {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://root:passwordpassword@cluster0.iroiu.mongodb.net/memoball', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  return client.db('memoball').collection('main-collection')
}

module.exports = router
