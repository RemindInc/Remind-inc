import { FC } from "react";
import { TreeNode } from "./Explorer";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const File: FC<TreeNode> = ({ path }) => {
  return (
    <div className="text-sm text-zinc-300 flex items-center gap-2">
      <DocumentTextIcon className="h-4" />
      <span className="text-sm">{path}</span>
    </div>
  );
};

export default File;
