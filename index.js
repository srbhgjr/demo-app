const express = require('express')
const app = express()
const port = 5000

app.get('/English', (req, res) => {
    res.send('Hello World!')
})

app.get('/French', (req, res) => {
    res.send('Bonjour le monde')
})

app.get('/Hindi', (req, res) => {
    res.send('Namastey sansar')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})