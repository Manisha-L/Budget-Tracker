import "./Balance.css";
const Balance = ({ totalIncome, totalExpense }) => {
  return (
    <div className="bal-container">
      <div>
        <h2 className="bal-title">Balance</h2> <br />
      </div>
      <div>
        <h2 className="bal">£{totalIncome - totalExpense}</h2>
      </div>
    </div>
  );
};
export default Balance;
