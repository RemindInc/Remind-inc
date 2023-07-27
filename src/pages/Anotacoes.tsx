import React, { useState } from "react";
import Explorer from "../components/Explorer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import EditorWrapper from "../components/EditorWrapper";

export interface Anotacao {
  title: string;
  content: string;
}

const Anotacoes = () => {
  const [anotacoes, setAnotacoes] = useState<Anotacao[]>([{
    title: 'Teste',
    content: 'testano'
  }, 
  {
    title: 'Teste1',
    content: 'testano'
  },
  {
    title: 'Teste2',
    content: 'testano'
  },
  {
    title: 'Teste3',
    content: 'testano'
  }]);
  const AnotacoesContext = React.createContext({ anotacoes, setAnotacoes });

  const adicionarAnotacao = () => {
    alert('te')
    const anotacao = {
      title: 'Teste',
      content: 'testano'
    }

    anotacoes?.push(anotacao);
    setAnotacoes(anotacoes)
  }

  return (
    <section className="flex w-full bg-transparent">
      <AnotacoesContext.Provider value={{ anotacoes, setAnotacoes }}>
        <Explorer />
        {
          anotacoes ? (<Tabs defaultValue={anotacoes[0].title} className="w-full">
            <TabsList className="w-full bg-zinc-900 rounded-none items-start">
              {anotacoes.map((anotacao) => (
                <TabsTrigger value={anotacao.title} key={anotacao.title}>
                  {
                    anotacao.title
                  }
                </TabsTrigger>
              ))}
            </TabsList>
            {
              anotacoes.map((anotacao) => (
                <TabsContent className="w-full" value={anotacao.title}>
                  <EditorWrapper />
                </TabsContent>
              ))
            }
          </Tabs>) : (<section className="w-full h-full bg-zinc-900 flex justify-center items-center flex-col">
            <h3 className="text-3xl text-zinc-400 font-bold w-[400px] text-center leading-10">Abra ou crie uma nova anotação para começar a editar.</h3>
            <button onClick={adicionarAnotacao} className="bg-zinc-200 font-bold p-2 z-50">Adicionar anotação</button>
          </section>)
        }
      </AnotacoesContext.Provider>
    </section>
  );
};

export default Anotacoes;
