import {
  ClockIcon,
  Cog8ToothIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { useContext } from "react";
import { OpenExplorerContext } from "../context/OpenExplorerContext";

const Menu = () => {
  const location = useLocation();
  const { isExplorerOpen, setIsExplorerOpen } = useContext(OpenExplorerContext);

  const rotas = [
    {
      href: "/",
      icon: <PencilIcon className="h-5" />,
      isActive: location.pathname === "/",
      tooltip: "Anotações",
    },
    {
      href: "/repeticao",
      icon: <ClockIcon className="h-5" />,
      isActive: location.pathname === "/repeticao",
      tooltip: "Repetição Espaçada",
    },
    {
      href: "/ajuda",
      icon: <QuestionMarkCircleIcon className="h-5" />,
      isActive: location.pathname === "/ajuda",
      tooltip: "Ajuda",
    },
    {
      href: "/configuracoes",
      icon: <Cog8ToothIcon className="h-5" />,
      isActive: location.pathname === "/configuracoes",
      tooltip: "Configurações",
    },
  ];

  return (
    <aside className="bg-zinc-900/95 flex flex-col justify-between z-50 h-full">
      <button
        className="flex justify-center p-2 hover:bg-zinc-800 text-white "
        onClick={() => setIsExplorerOpen(!isExplorerOpen)}
      >
        {isExplorerOpen ? (
          <ArrowLeftToLine className="h-4" />
        ) : (
          <ArrowRightToLine className="h-4" />
        )}
      </button>
      <nav className="flex w-full flex-col">
        {rotas.map((rota) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  to={rota.href}
                  key={rota.href}
                  className={`flex justify-center p-2 hover:bg-zinc-800 text-white ${
                    rota.isActive ? "bg-zinc-800" : ""
                  }`}
                >
                  {rota.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{rota.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </aside>
  );
};

export default Menu;
