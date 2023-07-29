import { FC, useContext, useState } from "react";
import { TreeNode } from "./Explorer";
import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";
import { AnotacoesContext } from "../context/AnotacoesContext";

interface CreateNoteProps {
  selectedNode: TreeNode;
  setIsCreateNoteOpen: (isOpen: boolean) => void;
}

const CreateNote: FC<CreateNoteProps> = ({
  selectedNode,
  setIsCreateNoteOpen,
}) => {
  const [title, setTitle] = useState("");
  const { anotacoes, setAnotacoes } = useContext(AnotacoesContext);

  function getPath(path: string) {
    const remindSubstring = "Documents\\";
    const index = path.indexOf(remindSubstring);

    if (index !== -1) {
      return path.substring(index + remindSubstring.length);
    } else {
      return "";
    }
  }

  const createNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await writeTextFile(`${getPath(selectedNode.path)}\\${title}.md`, "", {
      dir: BaseDirectory.Document,
    });

    const newNote = {
      title,
      content: "",
    };

    const updatedNotes = [...anotacoes, newNote];

    setAnotacoes(updatedNotes);
    setIsCreateNoteOpen(false);
  };

  return (
    <div
      className="p-3 border bg-zinc-900 border-zinc-800 z-50 rounded-md shadow-md absolute left-0 top-10 w-11/12 right-0 mx-auto flex flex-col gap-4"
      onBlur={() => setIsCreateNoteOpen(false)}
    >
      <h4 className="text-zinc-300 font-medium text-xs">Nova anotação</h4>
      <form className="flex flex-col gap-4" onSubmit={createNote}>
        <input
          type="text"
          autoFocus={true}
          placeholder="Título da anotação"
          className="w-full p-1.5 rounded-md bg-zinc-900 border border-zinc-800 focus:border-zinc-700 focus:outline-none text-xs text-zinc-100"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button className="px-4 py-1.5 text-xs text-zinc-900 bg-zinc-100 rounded-md font-medium hover:bg-zinc-900 hover:text-zinc-100 border border-zinc-100 hover:border-zinc-800">
          Criar Anotação
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
