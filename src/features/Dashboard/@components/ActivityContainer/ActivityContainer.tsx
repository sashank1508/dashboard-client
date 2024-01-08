import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ActivityDetails {
  model: string;
  type: string;
  usage: string;
  rate: string;
  spend: string;
}

interface MonthlyActivityDetails {
  [key: string]: ActivityDetails[];
}

const activityDetailsTemp: MonthlyActivityDetails = {
  December2023: [
    {
      model: "meta-llama/Llama-2-70b-chat-hf",
      type: "text-generation",
      usage: "86028 in tokens",
      rate: "$0.0007/Ktoken",
      spend: "$0.06",
    },
  ],
  November2023: [
    {
      model: "meta-llama/Llama-2-70b-chat-hf",
      type: "text-generation",
      usage: "86028 in tokens",
      rate: "$0.0007/Ktoken",
      spend: "$0.06",
    },
  ],
};

const columnHeaderDetails = ["Model", "Type", "Usage", "Rate", "Spend"];

interface IActivityContainer {
  columns?: any;
  activityDetails?: MonthlyActivityDetails;
}

export const ActivityContainer: React.FC<IActivityContainer> = ({
  columns = columnHeaderDetails,
  activityDetails = activityDetailsTemp,
}) => {
  return (
    <>
      {Object.keys(activityDetails).map((month: string) => {

        const totalSpend = activityDetails[month].reduce((sum, row) => sum + parseFloat(row.spend.replace('$', '')), 0);

        return (
          <div key={month}>
            <h3>{month}</h3>

            <table className="table table-striped">
              <thead>
                <tr>
                  {columns.map((column: any, index: number) => (
                    <th key={index} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(activityDetails[month]) &&
                  activityDetails[month].map((row: ActivityDetails, index: number) => (
                    <tr key={index}>
                      {Object.values(row).map((value: any, index: number) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                {Array.isArray(activityDetails[month]) && (
                  <tr>
                    <td colSpan={columns.length - 1}>Total</td>
                    <td>
                      ${totalSpend.toFixed(2)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
