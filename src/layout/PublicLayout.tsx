import { Button, Flex } from "antd";
import payBg from "../assets/images/pay_bg_1.jpg";
import logo from "../assets/images/pay_logo_white.png";
import "./index.less";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const PublicLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleStarted = () => {
    navigate("/auth/login");
  };
  return (
    <div className="public-container h-screen">
      <Flex className="h-screen w-full hidden-overflow" align="center">
        <Flex
          vertical
          className={`gap-16 bg-introduce h-full ${
            currentPath !== "/" ? "left-container" : ""
          }`}
        >
          <Flex className="gap-8 flex-start " align="center">
            <img src={logo} alt="Logo" className="logo h-36 w-36" />
            <h2 className="header4 text-text-inverse">PayTracker</h2>
          </Flex>
          <h1 className="header1 text-text-inverse px-24">
            {currentPath === "/"
              ? "Track Your Spending Effortlessly"
              : currentPath === "/auth/login"
              ? "Welcome Back"
              : "Create a new account"}
          </h1>
          <p className="body-m-emphasized text-text-inverse px-24">
            Manage your finance easily using our intuitive and user-friendly
            interface and set financial goals and monitor your progress.
          </p>
          <Button
            onClick={handleStarted}
            type="default"
            className="btn-introvert body-m-emphasized btn-started"
          >
            {currentPath === "/" ? "Get Started" : "Back"}
          </Button>
        </Flex>
        {currentPath === "/" ? (
          <img src={payBg} alt="Background" className="pay-bg" />
        ) : (
          <div className="public-bg-container">
            <Outlet />
          </div>
        )}
      </Flex>
    </div>
  );
};

export default PublicLayout;
