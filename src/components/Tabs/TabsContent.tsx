import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { TabsContext } from "../../context/TabsContext";

interface TabsContentProps {
  index: number;
  children: ReactNode;
}

const TabsContent: FC<TabsContentProps> = ({ index, children }) => {
  const { activeTab } = useContext(TabsContext);

  const [tab, setTab] = useState<number>();

  useEffect(() => {
    setTab(activeTab);
  }, [activeTab])

  return (
    <div className={`${index === tab ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default TabsContent;
