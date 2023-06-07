const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//app.get('/', (req, res) => {
//res.send('Hello World!')
//})

const path = require('path')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/flexBox2.html'))
})
