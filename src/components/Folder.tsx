import { FC, useState } from "react";
import { TreeNode } from "./Explorer";
import File from "./File";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Folder: FC<TreeNode> = ({ path, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseFolder = () => {
    setIsOpen(!isOpen);
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
      <button className="flex items-center" onClick={openCloseFolder}>
        <ChevronRightIcon
          className={`text-zinc-400 h-3 ${isOpen ? "transform rotate-90" : ""}`}
        />
        <span className="text-zinc-300 text-xs ml-2">
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
                <Folder {...node} key={node.path} />
              ) : (
                <File {...node} key={node.path} />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
