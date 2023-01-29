const mongoose = require('mongoose')


const ExpenseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide company name'],
            maxLength: 50,
        },
        amount: {
            type: Number, // Money validation?
            required: [true, 'Please provide an amount']
        },
        expenseType: {
            type: String,
            // enum: ['Utility', 'Transportation', 'Leisure', 'General'],
            enum: ['food', 'entertainment', 'housing', 'savings', 'transportation', 'miscellaneous'],
            default: 'miscellaneous',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Expense', ExpenseSchema)

