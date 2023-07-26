import { FC } from "react";
import { TreeNode } from "./Explorer";

const File: FC<TreeNode> = ({ path }) => {
  return <span className="text-xs text-zinc-300">{path}</span>;
};

export default File;
