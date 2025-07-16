import { Flex } from "antd";
import { ArrowDown, ArrowUp } from "lucide-react";
import './index.less';
const renderTabContent = (type: 'income' | 'expense' | 'balance') => (
  <div className="card-body">
    <Flex className="gap-16" align="center">
      <h2 className="header2">$24.4000</h2>
      <span
        className={`flex-center gap-8 body-m-emphasized amount-info ${
          type === "income"
            ? "bg-success text-text-success"
            : "bg-error text-text-error"
        }`}
      >
        {type === "income" ? <ArrowUp /> : <ArrowDown />}
        10%
      </span>
    </Flex>
    <div className="body-m-emphasized text-text-tertiary">
      Compared to last month
    </div>
  </div>
);
export default renderTabContent