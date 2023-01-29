const Expense = require('../models/Expense')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const mongoose = require('mongoose')

const getAllExpenses = async (req, res) => {

    queryObject = {
        createdBy: req.user.userId
    }

    let result = Expense.find(queryObject)
    const expenses = await result

    res.status(StatusCodes.OK).json({expenses})
    console.log(queryObject);
    //res.send('All expenses')
}
const getExpense = async (req, res) => {
    res.send('Expense')
}
const createExpense = async (req, res) => {
    res.send('Create Expense')
}
const updateExpense = async (req, res) => {
    res.send('update Expense')
}
const deleteExpense = async (req, res) => {
    res.send('Delete Expense')
}

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
}