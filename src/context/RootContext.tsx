import type React from "react";
import { SidebarProvider } from "./Sidebar/SidebarContext";

export const RootProvider = ({ children } :{children:React.ReactNode}) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}