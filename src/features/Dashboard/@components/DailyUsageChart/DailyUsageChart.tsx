import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimpleLineChart } from "../../../../components/Charts/SimpleLineChart";
import { PieChart } from "../../../../components/Charts/PieChart";
import { Button } from "../../../../components/Button";
import { HorizontalBarChart } from "../../../../components/Charts/HorizontalBarChart";


interface TDailyUsageChart {
  dataForMonth: any[];
}

export const DailyUsageChart: React.FC<TDailyUsageChart> = ({
  dataForMonth,
}) => {
  const [monthlyLimit, setMonthlyLimit] = useState(1);

  // Ensure that dataForMonth is defined before using it
  if (!dataForMonth) {
    return null; // or some fallback JSX if needed
  }

  const increaseLimit = () => {
    // Assuming you want to increase the limit by 0.2 units each time the button is clicked
    setMonthlyLimit((prevLimit) => prevLimit + 0.2);
    console.log(dataForMonth);
  };
  const decreaseLimit = () => {
    // Assuming you want to decrease the limit by 0.2 units each time the button is clicked
    setMonthlyLimit((prevLimit) => prevLimit - 0.2);
    console.log(dataForMonth);
  };

  // Calculate the total spend for the month
  const totalSpend = dataForMonth.reduce(
    (accumulator, record) => accumulator + parseFloat(record.spend) || 0,
    0
  );

  // Calculate the percentage spent out of the monthly limit
  const percentageSpent = (totalSpend / monthlyLimit) * 100;

  // Extract the month from the dataForMonth
  const month = dataForMonth.length > 0 ? dataForMonth[0].name.split(' ')[1] : '';

  return (
    <div className="dailyUsageChartContainer">
      <div className="dailyUsageChart">
        <div>
          <br />
            Daily Costs
          {/* <br /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
          </svg>
        </div>
        <div className="chartContainer">
          <SimpleLineChart data={dataForMonth} />
        </div>
      </div>
      <div className="billingDetails">
        <div className="card monthlyBill">
          <div className="card-body">
            <h5 className="card-title">
              Monthly Bill<span>{` ${month} 1 - 31`}</span>
            </h5>
            <div className="pieAndDetails">
              <PieChart colour="#198754" percentage={percentageSpent} />
              <div className="monthlyBillDetails">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                  </svg>
                  <strong style={{fontSize: "50px"}}>{`${totalSpend.toFixed(2)}`}</strong>
                </div>
                <div>
                  /
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                  </svg>
                  {`${monthlyLimit.toFixed(2)}  limit`}
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '3px'}}>
                <Button
                  label="Increase limit"
                  onClick={increaseLimit}
                  variant="success"                 
                />
                <Button
                  label="Decrease limit"
                  onClick={decreaseLimit}
                  variant="success"
                />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card creditGrants">
          <div className="card-body">
            <h5 className="card-title">
              Credit Grants<span>USD</span>
            </h5>
            <HorizontalBarChart percentage={30} />
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
          </svg>
          
          {`${totalSpend.toFixed(2)}`}/
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
          </svg>
          
          {`${monthlyLimit.toFixed(2)}`}
        </div>
          </div>
        </div>
        <div className="card invoices">
          <div className="card-body">
            <h5 className="card-title">Invoices</h5>
            <div>Net Amount: <strong>${`${totalSpend.toFixed(2)}`}</strong></div>
            Thank You!
          </div>
        </div>
      </div>
    </div>
  );
};
