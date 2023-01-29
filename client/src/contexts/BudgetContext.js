import React, { useContext, useState } from 'react'

const BudgetContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }) => {
    const [budget, setBudget] = useState(0)
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses() {

    }
    function addExpense() {

    }
    function addBudget() {

    }
    function deleteBudget() {

    }
    function deleteExpense() {

    }

    return (
        <BudgetContext.Provider value={{
        budget,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
        }}> {children} </BudgetContext.Provider>
    )
}