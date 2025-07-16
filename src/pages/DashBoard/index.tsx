import { Flex } from "antd";
import { useState } from "react";
import CustomTabCard from "../../components/CustomTabCard/CustomTabCard";
import useDeviceType from "../../hooks/useDeviceType";
import Categories from "./components/Categories/Categories";
import ChartSummary from "./components/ChartSumary/ChartSummary";
import Savings from "./components/Savings/Savings";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import "./index.less";

const Dashboard = () => {
  const { isMobile } = useDeviceType();
  const [activeTabKey, setActiveTabKey] = useState<string>("income");
  return (
    <div className="flex-column gap-16 h-full">
      <div className="dashboard-body gap-16 px-16 py-16">
        <div className="dashboard-body --left">
          {isMobile ? (
            <CustomTabCard
              activeTabKey={activeTabKey}
              setActiveTabKey={setActiveTabKey}
            />
          ) : (
            <Flex className="gap-16 w-full">
              <TotalBalance type="income" />
              <TotalBalance type="expense" />
              <TotalBalance type="balance" />
            </Flex>
          )}

          <div className="chart-container">
            <ChartSummary />
          </div>
        </div>
        <div className="dashboard-body --right">
          <Categories />
        </div>
      </div>
      <Flex
        vertical={isMobile}
        className="gap-16 table-body h-full px-16"
        align="center "
      >
        <div className="flex-1">
          <TransactionsTable />
        </div>
        <div className="flex" style={{ width: "25%" }}>
          <Savings />
        </div>
      </Flex>
    </div>
  );
};

export default Dashboard;
