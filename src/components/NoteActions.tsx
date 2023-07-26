import { Tag, FileSearch, Bookmark, WalletCards } from "lucide-react";

const NoteActions = () => {
  return (
    <div className="flex gap-6 p-2 mb-1">
      <button className="flex gap-1 items-center text-zinc-400 hover:text-white">
        <Tag className="h-4" />
        <span className="text-xs">Adicionar Tag</span>
      </button>
      <button className="flex gap-1 items-center text-zinc-400 hover:text-white">
        <FileSearch className="h-4" />
        <span className="text-xs">Adicionar Referência</span>
      </button>
      <button className="flex gap-1 items-center text-zinc-400 hover:text-white">
        <Bookmark className="h-4" />
        <span className="text-xs">Adicionar aos Favoritos</span>
      </button>
      <button className="flex gap-1 items-center text-zinc-400 hover:text-white">
        <WalletCards className="h-4" />
        <span className="text-xs">Adicionar a um cartão</span>
      </button>
    </div>
  );
};

export default NoteActions;
