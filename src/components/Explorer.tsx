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
    <section className="h-[calc(100vh-34px)] w-[250px] bg-zinc-900/95 bg-clip-padding backdrop-filter backdrop-blur-lg  border-x border-zinc-800">
      <ExplorerActions />
      <div className="p-3 flex flex-col gap-4 my-2 w-[300px] mx-auto">
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
