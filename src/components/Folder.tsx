import { FC, useState } from "react";
import { TreeNode } from "./Explorer";
import File from "./File";
import { ChevronRightIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "lucide-react";

const Folder: FC<TreeNode> = ({ path, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex items-center" onClick={openCloseFolder}>
        <ChevronRightIcon
          className={`text-zinc-400 h-3 ${isOpen ? "transform rotate-90" : ""}`}
        />
        {isOpen ? (
          <FolderOpenIcon className="h-4 text-zinc-300 ml-2" />
        ) : (
          <FolderIcon className="h-4 text-zinc-300 ml-1" />
        )}
        <span className="text-zinc-300 text-sm ml-2">{path}</span>
      </button>
      {children && (
        <div
          className={`ml-3 mt-2 ${isOpen ? "flex flex-col gap-2" : "hidden"}`}
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
