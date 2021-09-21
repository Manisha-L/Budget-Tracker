import { useState, ChangeEvent } from "react";
import "./AddIncome.css";
import { MdDelete } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";
import { IntIncProps } from "./Interfaces";

interface AddIncomeInterface {
  inc: IntIncProps[];
  setInc: React.Dispatch<React.SetStateAction<IntIncProps[]>>;
}

const AddIncome = ({ inc, setInc }: AddIncomeInterface): JSX.Element => {
  const [addInc, setAddInc] = useState<string>("");
  const [addAmount, setAddAmount] = useState<string>("");

  const income = (): void => {
    setInc([...inc, { name: addInc, amount: addAmount }]);
    setAddInc("");
    setAddAmount("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "incomeType") {
      setAddInc(e.target.value);
    } else {
      setAddAmount(e.target.value);
    }
  };
  return (
    <div className="AddIncome-container">
      <input
        className="inc-field"
        type="text"
        name="incomeType"
        placeholder=" Enter Income type"
        value={addInc}
        onChange={handleChange}
        // (e) => setAddInc(e.target.value)
      />

      <br />
      <input
        className="incamount-field"
        type="number"
        name="incomeAmount"
        placeholder=" Enter Income Amount"
        value={addAmount}
        onChange={handleChange}
      />
      <br />
      <button className="inc-sub" type="submit" onClick={income}>
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
        {inc.map((i: IntIncProps) => (
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
                setInc(
                  inc.filter(
                    (incf: IntIncProps) =>
                      incf.name !== i.name || incf.amount !== i.amount
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
