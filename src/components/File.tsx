import { FC, useContext } from "react";
import { TreeNode } from "./Explorer";
import { AnotacoesContext } from "../context/AnotacoesContext";
import { readTextFile, BaseDirectory } from "@tauri-apps/api/fs";

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
  const { anotacoes, setAnotacoes } = useContext(AnotacoesContext);

  const getLastPartOfFilePath = (filePath: string) => {
    if (!filePath) {
      return "";
    }

    const parts = filePath.split("\\");
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  function getPath(path: string) {
    const remindSubstring = "Documents\\";
    const index = path.indexOf(remindSubstring);

    if (index !== -1) {
      return path.substring(index + remindSubstring.length);
    } else {
      return "";
    }
  }

  const openFile = async () => {
    const openNote = {
      title: getLastPartOfFilePath(path),
      content: await readTextFile(getPath(path), {
        dir: BaseDirectory.Document,
      }),
    };

    const updatedNotes = [...anotacoes, openNote];
    setAnotacoes(updatedNotes);
  };

  const selectNode = () => {
    setSelectedNode({ path, children, is_folder });
  };

  return (
    <button
      onClick={selectNode}
      onDoubleClick={openFile}
      className={`text-xs inline-flex  py-1 px-2 rounded-md text-zinc-300 ${
        selectedNode?.path === path ? "bg-zinc-600/30" : ""
      }`}
    >
      {getLastPartOfFilePath(path)}
    </button>
  );
};

export default File;
