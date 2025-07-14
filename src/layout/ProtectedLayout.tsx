import { Outlet } from "react-router-dom";
import Sidebar from "../components/CustomsSideBar/Sidebar";
import Header from "../components/Header/Header";
import { useSidebar } from "../context/Sidebar/SidebarContext";

const ProtectedLayout = () => {
  const { isCollapsed } = useSidebar();
  return (
    <div className="protected-container gap-16">
      <div className={`protected-container --left ${isCollapsed ? "--collapsed" : ""}`}>
        <Sidebar />
      </div>
      <div className="protected-container --right">
        <Header />
        <div className="protected-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
