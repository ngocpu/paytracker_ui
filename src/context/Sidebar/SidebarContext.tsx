import { createContext, useContext, useState } from "react";

interface SidebarContextType {
    isCollapsed: boolean;
    activeTab: string;
    toggleSidebar: () => void;
    setActiveTab: (tab: string) => void;
}
const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({children} : {children: React.ReactNode}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState<string>(sessionStorage.getItem("activeTab") || "Dashboard");

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        sessionStorage.setItem("activeTab", tab);
    };

    return (
        <SidebarContext.Provider value={{ isCollapsed, activeTab, toggleSidebar, setActiveTab: handleTabChange }}>
            {children}
        </SidebarContext.Provider>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within SidebarProvider');
    }
    return context;
};