import React from "react";
import { Anotacao } from "../pages/Anotacoes";

export const AnotacoesContext = React.createContext<{
  anotacoes: Anotacao[];
  setAnotacoes: React.Dispatch<React.SetStateAction<Anotacao[]>>;
}>({
  anotacoes: [], 
  setAnotacoes: () => {},
});