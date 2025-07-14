import React, { lazy } from "react";
import type { CustomRouterProps } from "../types/global-type";
import ROUTER_PATH from "./router-path";

const DashboardPage = lazy(() => import("../pages/DashBoard/index"));
const GoalPage = lazy(() => import("../pages/DashBoard/Goals/Goal"));
const SavingPage = lazy(() => import("../pages/DashBoard/Saving/Saving"));
const TransactionPage = lazy(
  () => import("../pages/DashBoard/Transactions/Transaction")
);
// const AccountPage = lazy(
//   () => import("../pages/DashBoard/")
// );

const ROUTER: CustomRouterProps[] = [
  {
    isPublic: false,
    path: "/dashboard",
    element: React.createElement(DashboardPage),
    listChildren: [
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
      // {
      //   isPublic: false,
      //   path: ROUTER_PATH.ACCOUNTS,
      //   element: React.createElement(AccountPage),
      // },
    ],
  },
];
export default ROUTER;
