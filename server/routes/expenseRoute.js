const { create } = require('domain')
const express = require('express')
const router = express.Router()
const {
    createExpense,
    deleteExpense,
    getAllExpenses,
    updateExpense,
    getExpense,

} = require('../controllers/expenseController')

router.route('/').post(createExpense).get(getAllExpenses)
// stats/budget route tbd
router.route(':id').get(getExpense).delete(deleteExpense).patch(updateExpense)

