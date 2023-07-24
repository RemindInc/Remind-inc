import { BadgeHelp, BookOpen, Settings, TimerReset } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const rotas = [
    {
      href: "/",
      icon: <BookOpen className="icon" />,
      isActive: location.pathname === "/",
    },
    {
      href: "/repeticao",
      icon: <TimerReset className="icon" />,
      isActive: location.pathname === "/repeticao",
    },
    {
      href: "/ajuda",
      icon: <BadgeHelp className="icon" />,
      isActive: location.pathname === "/ajuda",
    },
    {
      href: "/configuracoes",
      icon: <Settings className="icon" />,
      isActive: location.pathname === "/configuracoes",
    },
  ];

  return (
    <aside className="h-full bg-zinc-900 flex items-end w-10">
      <nav className="flex w-full flex-col">
        {rotas.map((rota) => (
          <Link
            to={rota.href}
            key={rota.href}
            className={`flex justify-center p-2 hover:bg-zinc-800 text-white ${
              rota.isActive ? "bg-zinc-800" : ""
            }`}
          >
            {rota.icon}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Menu;