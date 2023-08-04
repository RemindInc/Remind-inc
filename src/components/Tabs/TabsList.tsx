import { FC, ReactNode } from "react";

interface TabsListProps {
  children: ReactNode;
}

const TabsList: FC<TabsListProps> = ({ children }) => {
  return <div className="w-full p-1 flex items-center">{children}</div>;
};

export default TabsList;
