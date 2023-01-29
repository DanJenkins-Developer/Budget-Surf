const Expense = require('../models/Expense')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const mongoose = require('mongoose')
const moment = require('moment')


const getAllExpenses = async (req, res) => {

    queryObject = {
        createdBy: req.user.userId
    }

    let result = Expense.find(queryObject)
    const expenses = await result

    res.status(StatusCodes.OK).json({ expenses })
    console.log(queryObject);
}
const getExpense = async (req, res) => {
    const {
        user: { userId },
        params: { id: expenseId }
    } = req
    const expense = await Expense.findOne({
        _id: expenseId,
        createdBy: userId
    })
    if (!expense) {
        throw new NotFoundError(`No expense with id ${expenseId}`)
    }
    res.status(StatusCodes.OK).json({ expense })
}
const createExpense = async (req, res) => {
    req.body.createdBy = req.user.userId
    const expense = await Expense.create(req.body)
    res.status(StatusCodes.CREATED).json({ expense })
}
const updateExpense = async (req, res) => {
    const {
        body: { amount },
        user: { userId },
        params: { id: expenseId }
    } = req

    if (amount === '') {
        throw new BadRequestError('Amount field cannot be empty')
    }
    const expense = await Expense.findByIdAndUpdate(
        { _id: expenseId, createdBy: userId },
        req.body,
        { new: true, runValidators: true }
    )
    if (!expense) {
        throw new NotFoundError(`No expense with id ${expenseId}`)
    }
    res.status(StatusCodes.OK).json({ expense })
}
const deleteExpense = async (req, res) => {
    const {
        user: { userId },
        params: { id: expenseId }
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

const showStats = async (req, res) => {
    let stats = await Expense.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        { $group: { _id: '$expenseType', count: { $sum: 1 } } }
    ])
    console.log(`Stats after aggregate :: ${stats}`);

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr
        acc[title] = count
        return acc
    }, {})
    console.log(`Stats after reduce :: ${stats}`);

    const defaultStats = {
        Utility: stats.Utility || 0,
        Transportation: stats.Transportation || 0,
        Leisure: stats.Leisure || 0,
        General: stats.General || 0,
    }
    console.log(`Default stats :: ${defaultStats}`);

    let totalExpenses = await Expense.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        { $group: { _id: '$expenseType', count: { $sum: '$amount' } } },
        { $sort: { count: -1 } }
    ])
    console.log(`totalExpenses after aggregate :: ${totalExpenses}`);

    totalExpenses = totalExpenses.reduce((a, b) => ({ count: a.count + b.count }))
    console.log(`totalExpenses after reduce :: ${totalExpenses}`);

    res.status(StatusCodes.OK).json({ defaultStats, totalExpenses })


}

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
    showStats,
}