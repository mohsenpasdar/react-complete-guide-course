import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    return (
        <div className='new-expense'>
            {!showForm && <button type='button' onClick={() => {setShowForm(true)}}>Add New Expense</button>}
            {showForm && <ExpenseForm hideForm={setShowForm} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;