import { FC } from "react";
import { TreeNode } from "./Explorer";

const File: FC<TreeNode> = ({ path }) => {
  const getLastPartOfFilePath = (filePath: string) => {
    if (!filePath) {
      return "";
    }

    const parts = filePath.split("\\");
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  return (
    <span className="text-xs text-zinc-300">{getLastPartOfFilePath(path)}</span>
  );
};

export default File;
