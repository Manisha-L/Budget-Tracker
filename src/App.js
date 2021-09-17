import { useState } from "react";
import "./Components/App.css";
import Balance from "./Components/Balance.js";
import IncExpView from "./Components/IncExpView.js";
import AddIncome from "./Components/AddIncome.js";
import AddExpense from "./Components/AddExpense";
import budgetImage from "./budgetImage.png";
import IncExpChart from "./Components/IncExpChart";

const App = () => {
  const [inc, setinc] = useState([]);
  const [exp, setExp] = useState([]);

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
            <IncExpView
              inc={inc}
              exp={exp}
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />
            <IncExpChart
              totalIncome={totalIncome}
              totalExpense={totalExpense}
              inc={inc}
              exp={exp}
            />
          </div>
          <div className="right-container">
            <AddIncome inc={inc} setinc={setinc} />
            <AddExpense exp={exp} setExp={setExp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
