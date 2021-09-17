import "./IncExpView.css";

const IncExpView = ({ totalIncome, totalExpense }) => {
  return (
    <div className="inc-exp">
      <div className="inc-container">
        <h2 className="inc-title">Income</h2>
        <br />
        <h2 className="inc">£{totalIncome}</h2>
      </div>

      <div className="exp-container">
        <h2 className="exp-title">Expenses</h2>
        <br />
        <h2 className="exp">£{totalExpense}</h2>
      </div>
    </div>
  );
};
export default IncExpView;
