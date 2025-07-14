import { ArrowRightLeft, Goal, HandCoins, LayoutDashboard } from "lucide-react";
import React from "react";
import ROUTER_PATH from "./router-path";

export const SidebarItem = [
  {
    title: "Dashboard",
    icon: React.createElement(LayoutDashboard),
    path: ROUTER_PATH.DASHBOARD,
  },
  {
    title: "Transactions",
    icon: React.createElement(ArrowRightLeft),
    path: ROUTER_PATH.TRANSACTIONS,
  },
  {
    title: "Goal",
    icon: React.createElement(Goal),
    path: ROUTER_PATH.GOAL,
  },
  {
    title: "Saving",
    icon: React.createElement(HandCoins),
    path: ROUTER_PATH.SAVING,
  },
  // {
  //   title: "Accounts",
  //   icon: React.createElement(CircleUserRound),
  //   path: ROUTER_PATH.ACCOUNTS,
  // },
];
