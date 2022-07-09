import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredyear, setSelectedYear] = useState("2020");

  const getYearEventHandler = (selectedyear) => {
    setSelectedYear(selectedyear);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredyear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          getYearData={getYearEventHandler}
        ></ExpensesFilter>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
