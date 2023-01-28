express = require('express')
app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT)