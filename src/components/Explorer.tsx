import { useEffect, useState } from "react";
import ExplorerActions from "./ExplorerActions";

import { invoke } from "@tauri-apps/api/tauri";

export interface TreeNode {
  path: string;
  children: TreeNode[];
  isFolder: boolean;
}

const Explorer = () => {
  const [fileTree, setFileTree] = useState<TreeNode>();

  const readFileTree = async () => {
    const fileTreeData: TreeNode = await invoke('read_file_tree');

    setFileTree(fileTreeData);
  };

  useEffect(() => {
    readFileTree();
  }, [])

  return (
    <section className="h-screen w-[250px] bg-zinc-800 border-r border-r-zinc-600">
      
      <ExplorerActions />
      {
        fileTree?.children.map((childNode) =>(
          <>
            <p>{childNode.path}</p>
            {
              childNode.children && childNode.children.map((node) => (
                <p>{node.path}</p>
              ))
            }
          </>
        ))
      }
    </section>
  );
};

export default Explorer;
