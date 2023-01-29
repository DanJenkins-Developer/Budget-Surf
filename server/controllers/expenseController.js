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
    const {
        user: {userId},
        params: {id: expenseId}
    } = req
    const expense = await Expense.findOne({
        _id: expenseId,
        createdBy: userId
    })
    if (!expense) {
        throw new NotFoundError(`No job with id ${expenseId}`)
    }
    res.status(StatusCodes.OK).json({expense})
}
const createExpense = async (req, res) => {
    req.body.createdBy = req.user.userId
    const expense = await Expense.create(req.body)
    res.status(StatusCodes.CREATED).json({expense})
}
const updateExpense = async (req, res) => {
    res.send('update Expense')
}
const deleteExpense = async (req, res) => {
    const {
        user: {userId},
        params: {id: expenseId}
    } = req

    const expense = await Expense.findByIdAndRemove({
        _id: expenseId,
        createdBy: userId,
    })
    if (!expense) {
        throw new NotFoundError(`No expense with id ${expenseId}`)
    }
    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
}