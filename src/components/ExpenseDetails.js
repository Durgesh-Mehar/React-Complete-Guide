import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-title">
        <h2>{props.title}</h2>
      </div>

      <div className="expense-amount">${props.amount}</div>
    </div>
  );
}
export default ExpenseDetails;
