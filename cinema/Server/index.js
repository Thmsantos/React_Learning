const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')


const index_Routes = require('./routes/index_Routes')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/cinema', index_Routes)

const port = 3001
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:3001`)
})
