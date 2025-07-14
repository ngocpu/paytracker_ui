import { Flex } from "antd";
import getPeriodTime from "../../helper/getPeriodTime";
import "./index.less";

const Header = () => {
  const periodTime = getPeriodTime();
  return (
    <Flex className="header-container pt-16 h-45 mr-16" align="center" justify="space-between">
        <h2 className="header3"> Good {periodTime}, user</h2>
      <Flex className="gap-8" align="center">
        <div className="w-36 h-36 avatar flex-center">N</div>
        <Flex vertical className="gap-4">
          <span className="body-m-emphasized ">User Name</span>
          <span className="body-s-emphasized text-text-secondary">user@example.com</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
