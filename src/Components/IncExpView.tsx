import "./IncExpView.css";
import { IntTotalAmountProps } from "./Interfaces";

const IncExpView = ({
  totalIncome,
  totalExpense,
}: IntTotalAmountProps): JSX.Element => {
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
