import React, { lazy } from "react";
import type { CustomRouterProps } from "../types/global-type";

const DashboardPage = lazy(() => import("../pages/DashBoard/index"));

const ROUTER: CustomRouterProps[] = [
  {
    isPublic: false,
    path: "/dashboard",
    element: React.createElement(DashboardPage),
  },
];
export default ROUTER;
