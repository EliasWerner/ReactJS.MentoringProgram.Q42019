const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 5000

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/test_connection', (req, res) => {
    res.send({ connection: `Express server is started` })
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
