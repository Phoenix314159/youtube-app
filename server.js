const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    scriptsArray = require('./fileArray'),
    config = require('./config'),
    app = express()

app.use(bodyParser.json())

scriptsArray.arr.map(file => {
    app.use(express.static(__dirname + file))
})

app.listen(config.port, () => {
    console.log(`listening on ${config.port}`)
})