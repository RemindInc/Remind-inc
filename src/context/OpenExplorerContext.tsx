import React from "react";

export const OpenExplorerContext = React.createContext<{
  isExplorerOpen: boolean;
  setIsExplorerOpen: (isOpen: boolean) => void;
}>({
  isExplorerOpen: false,
  setIsExplorerOpen: () => {},
});
