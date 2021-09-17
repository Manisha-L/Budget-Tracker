import { useState } from "react";
import "./AddIncome.css";
import { MdDelete } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";

const AddIncome = ({ inc, setinc }) => {
  const [addInc, setAddInc] = useState("");
  const [addAmount, setAddAmount] = useState("");

  const add = () => {
    setinc([...inc, { name: addInc, amount: addAmount }]);
    setAddInc("");
    setAddAmount("");
  };
  return (
    <div className="AddIncome-container">
      <input
        className="inc-field"
        type="text"
        placeholder=" Enter Income type"
        value={addInc}
        onChange={(e) => setAddInc(e.target.value)}
      />

      <br />
      <input
        className="incamount-field"
        type="number"
        placeholder=" Enter Income Amount"
        value={addAmount}
        onChange={(e) => setAddAmount(e.target.value)}
      />
      <br />
      <button className="inc-sub" type="submit" onClick={add}>
        Submit
      </button>
      <br />
      <h2 className="inc-trans">Income Transactions</h2>
      <Scrollbars
        className="inc-scr"
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
        {inc.map((i) => (
          <div className="inc-list">
            <div
              style={{
                width: "40%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {i.name}
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              £{i.amount}
            </div>
            <button
              className="inc-del"
              onClick={() => {
                setinc(
                  inc.filter(
                    (incf) => incf.name !== i.name || incf.amount !== i.amount
                  )
                );
              }}
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </Scrollbars>
    </div>
  );
};
export default AddIncome;
