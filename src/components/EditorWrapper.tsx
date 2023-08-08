import { FC, useState } from "react";
import Editor from "./Editor";
import NoteActions from "./NoteActions";
import { Anotacao } from "../pages/Anotacoes";

const EditorWrapper: FC<Anotacao> = ({ title, content }) => {
  const [markdown, setMarkdown] = useState<string>(content);
  return (
    <section className="w-full bg-zinc-900">
      <input
        defaultValue={title}
        type="text"
        className="w-full bg-zinc-900 text-3xl text-zinc-300 font-bold px-2 py-1 focus:outline-none"
        placeholder="Titulo da anotação"
      />
      <NoteActions />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </section>
  );
};

export default EditorWrapper;
