require('dotenv').config()
require('express-async-errors');

express = require('express')
app = express()
const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
app.use(express.json());

// router imports
const authRouter = require('./routes/authRoute');
// error handler imports
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// routes
app.use('/api/v1/auth', authRouter);
// error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
    } catch (error) {
        console.log(error);
    }
}

start()


