require('dotenv').config()
require('express-async-errors');

express = require('express')
app = express()
// connect db goes here
const authenticateUser = require('./middleware/authentication');

const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})


const start = () => {
    try {
        app.listen(PORT)  
        console.log(`Server is listening on port ${PORT}`); 
    } catch (error) {
        console.log(error);
    }
}

start()


