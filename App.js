import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    item: "car Insurance",
    amount: "134",
    date: new Date(2022, 5, 11),
  },
  {
    id: 2,
    item: "Bike Insurance",
    amount: "64.45",
    date: new Date(2022, 5, 4),
  },
  {
    id: 3,
    item: "Truck Insurance",
    amount: "456.89",
    date: new Date(2022, 7, 4),
  },
  {
    id: 4,
    item: "Bus Insurance",
    amount: "482.87",
    date: new Date(2022, 3, 4),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const expenseDataRecieve = (props) => {
    setExpenses((prevExpenses) => {
      return [props, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onExpenseData={expenseDataRecieve}></NewExpenses>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
