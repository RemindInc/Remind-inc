import { useEffect, useState } from "react";
import ExplorerActions from "./ExplorerActions";
import Folder from "./Folder";
import File from "./File";
import { invoke } from "@tauri-apps/api/tauri";

export interface TreeNode {
  path: string;
  children: TreeNode[];
  is_folder: boolean;
}

const Explorer = () => {
  const [fileTree, setFileTree] = useState<TreeNode>();

  const readFileTree = async () => {
    const fileTreeData: TreeNode = await invoke("read_file_tree");

    setFileTree(fileTreeData);
  };
  
  useEffect(() => {
    readFileTree();
  }, []);

  return (
    <section className="h-[calc(100vh-34px)] w-[300px] flex flex-col items-center bg-zinc-900/95 bg-clip-padding backdrop-filter backdrop-blur-lg  border-x border-zinc-800">
      <ExplorerActions />
      <div className="px-3 py-0.5 flex flex-col gap-4 my-4 w-[225px]">
        <h4 className="text-sm text-white font-medium">Remind</h4>
        {fileTree?.children.map((node) => (
          <>
            {node.is_folder ? (
              <Folder key={node.path} {...node} />
            ) : (
              <File key={node.path} {...node} />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Explorer;
