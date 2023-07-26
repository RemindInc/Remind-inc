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

const ExplorerActions = () => {
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
    },
    {
      desc: "Nova Pasta",
      icon: (
        <FolderPlusIcon className="text-white h-6 p-1 hover:bg-zinc-800 rounded-full" />
      ),
    },
  ];

  return (
    <div className="flex justify-center gap-8 py-1 px-7 mx-auto">
      {actions.map((action) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="flex">{action.icon}</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.desc}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default ExplorerActions;
