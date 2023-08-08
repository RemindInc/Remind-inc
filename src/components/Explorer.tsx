import { useContext, useEffect, useState } from "react";
import ExplorerActions from "./ExplorerActions";
import Folder from "./Folder";
import File from "./File";
import { invoke } from "@tauri-apps/api/tauri";
import { AnotacoesContext } from "../context/AnotacoesContext";

export interface TreeNode {
  path: string;
  children: TreeNode[];
  is_folder: boolean;
}

const initialState = {
  path: "C:\\Users\\David\\Documents\\remind",
  children: [],
  is_folder: true,
};

const Explorer = () => {
  const [fileTree, setFileTree] = useState<TreeNode>();
  const [selectedNode, setSelectedNode] = useState<TreeNode>(initialState);
  const { anotacoes } = useContext(AnotacoesContext);

  const readFileTree = async () => {
    const fileTreeData: TreeNode = await invoke("read_file_tree");

    setFileTree(fileTreeData);
  };

  useEffect(() => {
    readFileTree();
  }, [anotacoes]);

  return (
    <section className="w-[300px] flex flex-col items-center bg-zinc-900/95 bg-clip-padding backdrop-filter backdrop-blur-lg  border-x border-zinc-800">
      <ExplorerActions selectedNode={selectedNode} />
      <div className="px-3 py-0.5 flex flex-col gap-4 my-4 w-[225px]">
        <button
          onClick={() => setSelectedNode(initialState)}
          className={`text-zinc-100 font-medium text-sm py-1 px-2 inline-flex rounded-md ${
            selectedNode.path === initialState.path ? "bg-zinc-600/30" : ""
          }`}
        >
          Remind
        </button>
        {fileTree?.children.map((node) => (
          <>
            {node.is_folder ? (
              <Folder
                key={node.path}
                {...node}
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
              />
            ) : (
              <File
                key={node.path}
                {...node}
                selectedNode={selectedNode}
                setSelectedNode={setSelectedNode}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Explorer;
