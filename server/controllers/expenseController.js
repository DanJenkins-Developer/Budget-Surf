const Expence = require('../models/Expense')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const mongoose = require('mongoose')

const getAllExpense = async (req, res) => {
    res.send('All expenses')
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
    getAllExpense,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
}