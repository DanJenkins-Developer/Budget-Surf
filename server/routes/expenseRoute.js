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

router.route('/').post(createExpense).get(getAllExpenses)
// stats/budget route tbd
router.route('/stats').get(showStats)
router.route('/:id').get(getExpense).delete(deleteExpense).patch(updateExpense)

module.exports = router