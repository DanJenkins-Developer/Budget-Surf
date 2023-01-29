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
    params = {
        name: 'Car Payment',
        amount: 75,
        expenseType: 'Transportation',
        createdBy: '63d589a25f12e184ec291444'
    }

    const expense = await Expense.create(params)
    res.status(StatusCodes.CREATED).json({expense})
    // res.send('Create Expense')
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