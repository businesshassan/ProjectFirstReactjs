import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (receiveData) => {
  const getDataEventHandler = (props) => {
    const expenseData = {
      ...props,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    receiveData.onExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getExpenseData={getDataEventHandler} />
    </div>
  );
};

export default NewExpenses;
