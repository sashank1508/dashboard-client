import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab } from "../../types";
import { Button } from "../Button";

type TabsProps = {
  tabs: Tab[];
  onTabChange?: (index: number) => void;
};

const TabComponent: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="btn-group" role="group">
      {tabs.map((tab, index) => (
        <Button
          variant={activeTab === index ? "success" : "light"}
          onClick={() => handleTabClick(index)}
          label={tab.title}
        />
      ))}
    </div>
  );
};

export const Tabs = React.memo(TabComponent);
