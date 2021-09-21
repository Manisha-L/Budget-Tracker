import { useState } from "react";
import "./Components/App.css";
import Balance from "./Components/Balance";
import IncExpView from "./Components/IncExpView";
import AddIncome from "./Components/AddIncome";
import AddExpense from "./Components/AddExpense";
import budgetImage from "./budgetImage.png";
import IncExpChart from "./Components/IncExpChart";
import { IntIncProps, IntExpProps } from "./Components/Interfaces";

const App = (): JSX.Element => {
  const [inc, setInc] = useState<IntIncProps[]>([]);
  const [exp, setExp] = useState<IntExpProps[]>([]);

  const totalIncome = inc.reduce(
    (totalinc, total) => (totalinc = totalinc + Number(total.amount)),
    0
  );
  const totalExpense = exp.reduce(
    (totalexp, tot) => (totalexp = totalexp + Number(tot.amount)),
    0
  );
  return (
    <div className="container">
      <img src={budgetImage} alt="Budget Image" className="image" />
      <div className="inner-container">
        <h1 className="title">BUDGET TRACKER</h1>
        <div className="budget">
          <div className="left-container">
            <Balance totalIncome={totalIncome} totalExpense={totalExpense} />
            <IncExpView totalIncome={totalIncome} totalExpense={totalExpense} />
            <IncExpChart
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />
          </div>
          <div className="right-container">
            <AddIncome inc={inc} setInc={setInc} />
            <AddExpense exp={exp} setExp={setExp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
