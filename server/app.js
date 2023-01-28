express = require('express')
app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
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


