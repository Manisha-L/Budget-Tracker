import { useState } from "react";
import "./AddExpense.css";
import { MdDelete } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";

const AddExpense = ({ exp, setExp }) => {
  const [AddExp, setAddExp] = useState("");
  const [AddExpAmount, setAddExpAmount] = useState("");

  const expense = () => {
    setExp([...exp, { name: AddExp, amount: AddExpAmount }]);
    setAddExp("");
    setAddExpAmount("");
  };

  return (
    <div className="AddExpense-container">
      <input
        className="exp-field"
        type="text"
        placeholder=" Enter Expense type"
        value={AddExp}
        onChange={(e) => setAddExp(e.target.value)}
      />
      <br />
      <input
        className="expamount-field"
        type="number"
        placeholder=" Enter Expense Amount"
        value={AddExpAmount}
        onChange={(e) => setAddExpAmount(e.target.value)}
      />
      <br />
      <button className="exp-sub" type="submit" onClick={expense}>
        Submit
      </button>
      <br />
      <h2 className="exp-trans">Expense Transactions</h2>
      <Scrollbars
        className="exp-scr"
        style={{ height: 180 }}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "grey",
              width: "4px",
              opacity: "1",
            }}
          />
        )}
      >
        {exp.map((ex) => (
          <div className="exp-list">
            <div
              style={{
                width: "40%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {ex.name}
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              £{ex.amount}
            </div>

            <button
              className="exp-del"
              onClick={() =>
                setExp(
                  exp.filter(
                    (expf) => expf.name !== ex.name || expf.amount !== ex.amount
                  )
                )
              }
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </Scrollbars>
    </div>
  );
};
export default AddExpense;
