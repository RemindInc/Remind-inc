import { FC, useContext } from "react";
import { TreeNode } from "./Explorer";
import { AnotacoesContext } from "../context/AnotacoesContext";
import { readTextFile, BaseDirectory, removeFile } from "@tauri-apps/api/fs";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { Trash2 } from "lucide-react";

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

  const deleteFile = async () => {
    await removeFile(getPath(path), { dir: BaseDirectory.Document });
    const updatedNotes = anotacoes.filter(
      (anotacao) => anotacao.title !== getLastPartOfFilePath(path)
    );
    
    setAnotacoes(updatedNotes);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <button
          onClick={selectNode}
          onDoubleClick={openFile}
          className={`text-xs inline-flex  py-1 px-2 rounded-md text-zinc-300 ${
            selectedNode?.path === path ? "bg-zinc-600/30" : ""
          }`}
        >
          {getLastPartOfFilePath(path)}
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-zinc-900 border border-zinc-800 absolute top-3 min-w-max flex flex-col justify-center">
        <button
          onClick={deleteFile}
          className="flex justify-center items-center gap-1 text-zinc-300 text-xs hover:bg-zinc-800 p-3 rounded-md"
        >
          <Trash2 className="h-3" />
          <span className="pr-1.5">Deletar arquivo</span>
        </button>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default File;
