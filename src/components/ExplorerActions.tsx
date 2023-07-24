import {
  MagnifyingGlassIcon,
  TagIcon,
  BookmarkIcon,
  PencilSquareIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";

const ExplorerActions = () => {
  return (
    <div className="flex justify-between py-0.5 px-7 mx-auto border-b border-b-zinc-600 rounded-full">
      <MagnifyingGlassIcon className="text-white h-6 p-1 hover:bg-zinc-900 rounded-full" />
      <TagIcon className="text-white h-6 p-1 hover:bg-zinc-900 rounded-full" />
      <BookmarkIcon className="text-white h-6 p-1 hover:bg-zinc-900 rounded-full" />
      <PencilSquareIcon className="text-white h-6 p-1 hover:bg-zinc-900 rounded-full" />
      <FolderPlusIcon className="text-white h-6 p-1 hover:bg-zinc-900 rounded-full" />
    </div>
  );
};

export default ExplorerActions;
