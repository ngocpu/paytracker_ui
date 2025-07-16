import { Card, DatePicker, Tooltip } from "antd";
import dayjs from "dayjs";
import { BanknoteArrowDown, BanknoteArrowUp, HandCoins } from "lucide-react";
import React from "react";
import { formatMonth } from "../../helper/date";
import type { CustomTabCardProps } from "../../types/global-type";
import renderTabContent from "./ContentTab";
import "./index.less";

const tabList = [
  {
    key: "income",
    tab: (
      <Tooltip title="Income">
        <BanknoteArrowUp />
      </Tooltip>
    ),
  },
  {
    key: "expense",
    tab: (
      <Tooltip title="Expense">
        <BanknoteArrowDown />
      </Tooltip>
    ),
  },
  {
    key: "balance",
    tab: (
      <Tooltip title="Balance">
        <HandCoins />
      </Tooltip>
    ),
  },
];

const contentList: Record<string, React.ReactNode> = {
  income: renderTabContent('income'),
  expense: renderTabContent('expense'),
  balance: renderTabContent('balance'),
};

const CustomTabCard: React.FC<CustomTabCardProps> = ({
  activeTabKey,
  setActiveTabKey,
}) => {
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <Card
      className="custom-tab-card"
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
      tabBarExtraContent={
        <DatePicker
          defaultValue={dayjs()}
          format={formatMonth(dayjs().toDate())}
          style={{ width: 100 }}
        />
      }
      //   tabProps={{
      //     size: 'middle',
      //   }}
    >
      {contentList[activeTabKey as string]}
    </Card>
  );
};

export default CustomTabCard;
