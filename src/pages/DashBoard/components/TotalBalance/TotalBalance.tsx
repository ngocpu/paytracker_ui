// import React from "react";

import { Card, DatePicker, Flex } from "antd";
import dayjs from "dayjs";
import { BanknoteArrowDown, BanknoteArrowUp, HandCoins } from "lucide-react";
import renderTabContent from "../../../../components/CustomTabCard/ContentTab";
import { formatMonth } from "../../../../helper/date";
import "./index.less";

type BalanceProps = "income" | "expense" | "balance";
const TotalBalance = ({ type }: { type: BalanceProps }) => {
  return (
    <div className="balance-container w-full">
      <Card className={`balance-card --${type}`}>
        <div className="card-header flex-center flex-between">
          <Flex className="gap-8 flex-start" align="center">
            {type === "income" ? (
              <BanknoteArrowUp />
            ) : type === "expense" ? (
              <BanknoteArrowDown />
            ) : (
              <HandCoins />
            )}
            <h3 className="body-m-emphasized">{`Monthly ${
              type === "income"
                ? "Income"
                : type === "expense"
                ? "Expense"
                : "Balance"
            }`}</h3>
          </Flex>
          <DatePicker
            defaultValue={dayjs()}
            format={formatMonth(dayjs().toDate())}
            style={{ width: 100 }}
          />
        </div>
        {renderTabContent(type)}
      </Card>
    </div>
  );
};

export default TotalBalance;
