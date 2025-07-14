import { Button, Flex, Tooltip } from "antd";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/pay_logo.png";
import { SidebarItem } from "../../constants/sidebar";
import { useSidebar } from "../../context/Sidebar/SidebarContext";
import "./index.less";
const Sidebar = () => {
  const { activeTab, setActiveTab , toggleSidebar, isCollapsed} = useSidebar();
  const navigate = useNavigate();
  const handleClick = ({ value, path }: { value: string; path: string }) => {
    setActiveTab(value);
    console.log(`Navigating to ${path}`);
    navigate(value === "Dashboard" ? `/dashboard` : `/dashboard/${path}`);
  };
  console.log(`Sidebar isCollapsed: ${isCollapsed}`);
  return (
    <div className={`sidebar-container ${isCollapsed ? "--collapsed" : ""}`}>
      <Flex className="gap-8 sidebar-title" align="center">
        <img src={logo} alt="Logo" className={isCollapsed ? 'w-60 h-53 flex-center' : 'w-36 h-36'} />
        {!isCollapsed && <h2 className="header3 text-text-primary">PayTracker</h2>}
      </Flex>
      <Flex vertical className="gap-16 sidebar-menu">
        {SidebarItem.map((item) => (
          <Flex
            onClick={() => handleClick({ value: item.title, path: item.path })}
            key={item.title}
            className={`gap-8 sidebar-menu-item ${
              activeTab === item.title ? "--active" : ""
            }`}
            align="center"
          >
            {isCollapsed ? <Tooltip title={item.title} placement="topRight">{item.icon}</Tooltip> : <span>{item.icon}</span>}
            {!isCollapsed && (
              <span className="body-m-emphasized">
                {item.title}
              </span>
            )}
          </Flex>
        ))}
      </Flex>
      <Tooltip title={isCollapsed ? "Expand" : "Collapse"} placement="top">
        <Button onClick={toggleSidebar} icon={isCollapsed ? <ArrowRightToLine /> : <ArrowLeftToLine />} className="btn-collapse" />
      </Tooltip>
    </div>
  );
};

export default Sidebar;
