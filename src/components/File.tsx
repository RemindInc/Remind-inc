import { FC } from "react";
import { TreeNode } from "./Explorer";

interface SelectedNode extends TreeNode {
  selectedNode: TreeNode;
  setSelectedNode: (node: TreeNode) => void;
}

const File: FC<SelectedNode> = ({
  path,
  children,
  is_folder,
  selectedNode,
  setSelectedNode,
}) => {
  const getLastPartOfFilePath = (filePath: string) => {
    if (!filePath) {
      return "";
    }

    const parts = filePath.split("\\");
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  const selectNode = () => {
    setSelectedNode({ path, children, is_folder });
  };

  return (
    <button
      onClick={selectNode}
      className={`text-xs inline-flex  py-1 px-2 rounded-md text-zinc-300 ${
        selectedNode?.path === path ? "bg-zinc-600/30" : ""
      }`}
    >
      {getLastPartOfFilePath(path)}
    </button>
  );
};

export default File;
