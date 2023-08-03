import { useState } from "react";
import Explorer from "../components/Explorer";

import EditorWrapper from "../components/EditorWrapper";

import { AnotacoesContext } from "../context/AnotacoesContext";
import { Tabs } from "../components/Tabs/Index";

export interface Anotacao {
  title: string;
  content: string;
}

const Anotacoes = () => {
  const [anotacoes, setAnotacoes] = useState<Anotacao[]>([]);

  return (
    <section className="flex w-full bg-zinc-900">
      <AnotacoesContext.Provider value={{ anotacoes, setAnotacoes }}>
        <Explorer />
        {anotacoes.length > 0 ? (
          <Tabs.Wrapper>
            <Tabs.List>
              {anotacoes.map((anotacao, index) => (
                <Tabs.Item
                  index={index}
                  title={anotacao.title}
                  key={anotacao.title}
                />
              ))}
            </Tabs.List>
            {anotacoes.map((anotacao, index) => (
              <Tabs.Content index={index}>
                <EditorWrapper
                  title={anotacao.title}
                  content={anotacao.content}
                />
              </Tabs.Content>
            ))}
          </Tabs.Wrapper>
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
