import React, { lazy } from "react";
import type { CustomRouterProps } from "../types/global-type";
import ROUTER_PATH from "./router-path";

const DashboardPage = lazy(() => import("../pages/DashBoard/index"));
const GoalPage = lazy(() => import("../pages/Goals/Goal"));
const SavingPage = lazy(() => import("../pages/Saving/Saving"));
const TransactionPage = lazy(() => import("../pages/Transactions/Transaction"));
// const AccountPage = lazy(
//   () => import("../pages/DashBoard/")
// );

const ROUTER: CustomRouterProps[] = [
  {
    isPublic: false,
    path: ROUTER_PATH.DASHBOARD,
    element: React.createElement(DashboardPage),
  },
  {
    isPublic: false,
    path: ROUTER_PATH.TRANSACTIONS,
    element: React.createElement(TransactionPage),
  },
  {
    isPublic: false,
    path: ROUTER_PATH.GOAL,
    element: React.createElement(GoalPage),
  },
  {
    isPublic: false,
    path: ROUTER_PATH.SAVING,
    element: React.createElement(SavingPage),
  },
];
export default ROUTER;
