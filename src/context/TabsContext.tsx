import React from "react";

export const TabsContext = React.createContext<{
  activeTab: number;
  setActiveTab: (tab: number) => void;
}>({
  activeTab: 0,
  setActiveTab: () => {},
});
