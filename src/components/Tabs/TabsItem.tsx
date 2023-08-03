import { FC, useContext } from "react";
import { TabsContext } from "../../context/TabsContext";
import { XIcon } from "lucide-react";
import { AnotacoesContext } from "../../context/AnotacoesContext";

interface TabsItemProps {
  index: number;
  title: string;
}

const TabsItem: FC<TabsItemProps> = ({ index, title }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const { anotacoes, setAnotacoes } = useContext(AnotacoesContext);

  const setTab = () => {
    setActiveTab(index);
  };

  const closeTab = () => {
    const updatedAnotacoes = anotacoes.filter(
      (anotacao) => anotacao.title !== title
    );

    setAnotacoes(updatedAnotacoes);

    if (activeTab === index) {
      if(activeTab !== 0) {
        setActiveTab(activeTab - 1);
      } else {
        setActiveTab(0)
      }
    }
  };

  return (
    <button onClick={setTab} className={`flex items-center rounded-sm p-1 gap-2 ${activeTab === index ? 'bg-zinc-800' : ""}`}>
      <span className="text-xs text-zinc-300 pl-1">{index}{title}</span>
      <button className="flex" onClick={closeTab}>
        <XIcon className="h-3 text-zinc-300" />
      </button>
    </button>
  );
};

export default TabsItem;
