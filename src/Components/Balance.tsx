import "./Balance.css";
import { IntTotalAmountProps } from "./Interfaces";

const Balance = ({
  totalIncome,
  totalExpense,
}: IntTotalAmountProps): JSX.Element => {
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
