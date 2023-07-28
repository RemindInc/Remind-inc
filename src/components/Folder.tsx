import { FC, useState } from "react";
import File from "./File";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { TreeNode } from "./Explorer";

interface SelectedNode extends TreeNode {
  selectedNode: TreeNode;
  setSelectedNode: (node: TreeNode) => void;
}

const Folder: FC<SelectedNode> = ({
  path,
  children,
  is_folder,
  selectedNode,
  setSelectedNode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseFolder = () => {
    setIsOpen(!isOpen);
    setSelectedNode({ path, children, is_folder });
  };

  const getLastPartOfFilePath = (filePath: string) => {
    if (!filePath) {
      return "";
    }

    const parts = filePath.split("\\");
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  return (
    <div>
      <button
        className={`flex items-center py-1 px-2 rounded-md ${
          selectedNode?.path === path ? "bg-zinc-600/30" : ""
        }`}
        onClick={openCloseFolder}
      >
        <ChevronRightIcon
          className={`text-zinc-400 h-3 ${isOpen ? "transform rotate-90" : ""}`}
        />
        <span className={`text-zinc-300 text-xs ml-2`}>
          {getLastPartOfFilePath(path)}
        </span>
      </button>
      {children && (
        <div
          className={`mt-2 border-l border-l-zinc-800 pl-3 ml-1.5 ${
            isOpen ? "flex flex-col gap-2" : "hidden"
          }`}
        >
          {children.map((node) => (
            <>
              {node.is_folder ? (
                <Folder
                  {...node}
                  key={node.path}
                  selectedNode={selectedNode}
                  setSelectedNode={setSelectedNode}
                />
              ) : (
                <File
                  {...node}
                  key={node.path}
                  selectedNode={selectedNode}
                  setSelectedNode={setSelectedNode}
                />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
