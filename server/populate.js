require('dotenv').config()
const mockData = require('./mock_data.json')

const Expense = require('./models/Expense')
const connectDB = require('./db/connect')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Expense.create(mockData)
        console.log('Success !!!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()