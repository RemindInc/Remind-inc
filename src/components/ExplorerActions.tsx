import {
  TagIcon,
  BookmarkIcon,
  PencilSquareIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import { FC, useContext, useState } from "react";
import { AnotacoesContext } from "../context/AnotacoesContext";
import CreateNote from "./CreateNote";
import { TreeNode } from "./Explorer";

interface ExploreActions {
  selectedNode: TreeNode;
}

const ExplorerActions: FC<ExploreActions> = ({ selectedNode }) => {
  const [isCreateNoteOpen, setIsCreateNoteOpen] = useState(false);
  const { anotacoes, setAnotacoes } = useContext(AnotacoesContext);

  const createNewNote = () => {
    const newNote = {
      title: "title",
      content: "",
    };

    const updatedNotes = [...anotacoes, newNote];
    setAnotacoes(updatedNotes);
  };

  const actions = [
    {
      desc: "Tags",
      icon: (
        <TagIcon className="text-white h-6 p-1 hover:bg-zinc-800 rounded-full" />
      ),
    },
    {
      desc: "Favoritos",
      icon: (
        <BookmarkIcon className="text-white h-6 p-1 hover:bg-zinc-800 rounded-full" />
      ),
    },
    {
      desc: "Nova Anotação",
      icon: (
        <PencilSquareIcon className="text-white h-6 p-1 hover:bg-zinc-800 rounded-full" />
      ),
      popover: <CreateNote selectedNode={selectedNode} setIsCreateNoteOpen={setIsCreateNoteOpen}/>,
      action: createNewNote,
    },
    {
      desc: "Nova Pasta",
      icon: (
        <FolderPlusIcon className="text-white h-6 p-1 hover:bg-zinc-800 rounded-full" />
      ),
    },
  ];

  return (
    <div className="flex justify-center gap-8 py-1 px-7 mx-auto relative">
      {actions.map((action) => (
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button
                  onClick={() => setIsCreateNoteOpen(!isCreateNoteOpen)}
                  className="flex"
                >
                  {action.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.desc}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {isCreateNoteOpen && action.popover}
        </div>
      ))}
    </div>
  );
};

export default ExplorerActions;
