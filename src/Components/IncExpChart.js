import { Pie } from "react-chartjs-2";
import "./IncExpChart.css";

const IncExpChart = ({ totalIncome, totalExpense }) => {
  return (
    <div className="chart">
      <Pie
        data={{
          labels: ["Income in Total", "Expense in Total"],

          datasets: [
            {
              label: "Income",
              data: [totalIncome, totalExpense],
              backgroundColor: ["rgba(0,255,0, 0.5)", "rgba(255,0,0, 0.5)"],
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
export default IncExpChart;
