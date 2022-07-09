import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = <p>NO expense found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem key={e.id} item={e.item} amount={e.amount} date={e.date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
