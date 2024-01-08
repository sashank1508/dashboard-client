import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Pagination } from "../../components/Pagination/Pagination";
import { Tabs } from "../../components/Tabs";
import { ActivityContainer } from "./@components/ActivityContainer";
import { DailyUsageChart } from "./@components/DailyUsageChart";
import { dashboardTabsConfig } from "./dashboard.constants";
import "./dashboard.scss";
//import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import {
  formatDataByMonth,
  formatDataForActivity,
  formatDataForLineChart,
} from "./utilities";

const DashboardComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [activityDetails, setActivityDetails] = useState<{
    [key: string]: string | number;
  }>({});
  const [activityDetailsData, setActivityDetailsData] = useState({});
  const [months, setMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
      console.log({ response });
      const fornmattedData = formatDataByMonth(response.data);
      setMonths(Object.keys(fornmattedData));
      setActivityDetails(fornmattedData);
      setActivityDetailsData(formatDataForActivity(response.data));
      
    });
  }, []);

  const onMonthChange = (selectedMonth: any) => {
    setSelectedMonth(months[selectedMonth]);

  };

  return (
    <div className="dashboardContainer">
      <div className="headerActions">
        <div>
          <Tabs tabs={dashboardTabsConfig} onTabChange={setCurrentTab} />
        </div>
        {currentTab !== 1 && (
          <div className="rightContent">
            <Pagination pages={months} onPageChange={onMonthChange} />
            <Button onClick={() => {}} label="Export" variant="success" />
          </div>
        )}
      </div>
      {currentTab === 0 && (
          <DailyUsageChart
            dataForMonth={formatDataForLineChart(
              activityDetails[selectedMonth],
              selectedMonth
            )} 
          />
        // <MonthlyBillChart
        // dataForMonth={formatDataForLineChart(
        //   activityDetails[selectedMonth],
        //   selectedMonth
        //   )}
        // />

      )}
      {currentTab === 1 && (
        <ActivityContainer activityDetails={activityDetailsData} />
      )}
    </div>
  );
};

export const Dashboard = React.memo(DashboardComponent);
