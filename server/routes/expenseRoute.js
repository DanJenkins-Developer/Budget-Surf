const express = require('express')
const testUser = require('../middleware/testUser')
const router = express.Router()
const {
    createExpense,
    deleteExpense,
    getAllExpenses,
    updateExpense,
    getExpense,
    showStats,

} = require('../controllers/expenseController')

router.route('/').post(testUser, createExpense).get(getAllExpenses)
// stats/budget route tbd
router.route('/stats').get(showStats)
router.route('/:id').get(getExpense).delete(testUser, deleteExpense).patch(testUser, updateExpense)

module.exports = router