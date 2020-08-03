const express = require('express')
const cors = require('cors')

const posts = require('./routes/api/posts')

const app = express()
app.use(cors())
app.use(express.json())

// Write routes here
app.use('/api/posts', posts)

// ----------------------

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server started ! Port: ' + PORT))
