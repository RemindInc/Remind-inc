import { useState } from "react";
import Editor from "./Editor";
import NoteActions from "./NoteActions";

const EditorWrapper = () => {
  const [markdown, setMarkdown] = useState<string | undefined>(``);
  return (
    <section className="w-full h-[calc(100vh-34px)] bg-zinc-900">
      <input
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
