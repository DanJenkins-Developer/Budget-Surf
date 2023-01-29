require('dotenv').config()
require('express-async-errors');

express = require('express')
app = express()
const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
app.use(express.json());

// router imports
const authRouter = require('./routes/authRoute');
const expenseRouter = require('./routes/expenseRoute')
// error handler imports
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/expense', authenticateUser, expenseRouter)


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})


// error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()