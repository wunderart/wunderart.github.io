const express = require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
const directoryPath = path.join(__dirname, '../client/public/images')

let images = []
fs.readdirSync(directoryPath).forEach(file => images.push(file))

app.get('/', (req, res) => {
  res.send(images)
})

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050...')
})
