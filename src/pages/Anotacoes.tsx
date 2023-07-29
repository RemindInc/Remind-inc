import React, { useState } from "react";
import Explorer from "../components/Explorer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import EditorWrapper from "../components/EditorWrapper";
import { XIcon } from "lucide-react";
import { AnotacoesContext } from "../context/AnotacoesContext";

export interface Anotacao {
  title: string;
  content: string;
}

const Anotacoes = () => {
  const [anotacoes, setAnotacoes] = useState<Anotacao[]>([
    {
      title: "Teste1",
      content: "testano",
    },
    {
      title: "Teste2",
      content: "testano",
    },
    {
      title: "Teste3",
      content: "testano",
    },
  ]);

  const closeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const updatedAnotacoes = anotacoes.filter(
      (anotacao) => anotacao.title !== e.currentTarget.value
    );
    setAnotacoes(updatedAnotacoes);
  };

  return (
    <section className="flex w-full bg-zinc-900">
      <AnotacoesContext.Provider value={{ anotacoes, setAnotacoes }}>
        <Explorer />
        {anotacoes.length > 0 ? (
          <Tabs defaultValue={anotacoes[0].title} className="w-full">
            <TabsList
              id="tab-list"
              className="w-full bg-zinc-900 rounded-none items-start"
            >
              {anotacoes.map((anotacao) => (
                <TabsTrigger
                  value={anotacao.title}
                  key={anotacao.title}
                  className="flex justify-center"
                >
                  {
                    <div className="flex items-center text-zinc-300 hover:text-white">
                      <span className="text-xs pl-2">{anotacao.title}</span>
                      <button onClick={closeTab} value={anotacao.title}>
                        <XIcon className="h-3 pl-" />
                      </button>
                    </div>
                  }
                </TabsTrigger>
              ))}
            </TabsList>
            {anotacoes.map((anotacao) => (
              <TabsContent
                className="w-full bg-zinc-900"
                value={anotacao.title}
                aria-checked={true}
              >
                <EditorWrapper />
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <section className="w-full h-full bg-zinc-900 flex justify-center items-center flex-col">
            <h3 className="text-2xl text-zinc-400 font-bold w-[400px] text-center leading-10">
              Abra ou crie uma nova anotação para começar a editar.
            </h3>
          </section>
        )}
      </AnotacoesContext.Provider>
    </section>
  );
};

export default Anotacoes;
