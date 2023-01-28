const mongoose = require('mongoose')


const Expence = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide company name'],
            maxLength: 50,
        },
        amount: {
            type: int, // Money validation?
            required: [true, 'Please provide an amount']
        },
        expenceType: {
            type: String,
            enum: ['Utility', 'Transportation', 'Leisure', 'General'],
            default: 'General',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        }
    }
)

