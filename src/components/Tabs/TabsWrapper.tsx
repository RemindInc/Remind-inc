import { FC, ReactNode, useState } from "react";
import { TabsContext } from "../../context/TabsContext";

interface TabsWrapperProps {
  children: ReactNode;
}

const TabsWrapper: FC<TabsWrapperProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <section className="w-full h-full">{children}</section>
    </TabsContext.Provider>
  );
};

export default TabsWrapper;
