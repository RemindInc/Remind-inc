import { FC, ReactNode, useContext } from "react";
import { TabsContext } from "../../context/TabsContext";

interface TabsContentProps {
  index: number;
  children: ReactNode;
}

const TabsContent: FC<TabsContentProps> = ({ index, children }) => {
  const { activeTab } = useContext(TabsContext);

  return (
    <div className={`${index === activeTab ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default TabsContent;
