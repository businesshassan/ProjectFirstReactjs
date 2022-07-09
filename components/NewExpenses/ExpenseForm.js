import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entereditem, setEnteredItem] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const textChangeHandler = (e) => {
    setEnteredItem(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      item: entereditem,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredItem("");
    props.getExpenseData(expenseData);
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label className="new-expense__control label">Item</label>
          <input
            className="new-expense__control input"
            type="text"
            onChange={textChangeHandler}
            value={entereditem}
          />
        </div>
        <div>
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredamount}
          />
        </div>
        <div>
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2019-01-01"
            max=" 2022-12-31"
            onChange={dateChangeHandler}
            value={entereddate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
