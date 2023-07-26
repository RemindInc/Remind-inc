import { FC } from "react";
import MDEditor from "@uiw/react-md-editor";

interface EditorProps {
  markdown: string | undefined;
  setMarkdown: (markdown: string) => void;
}

const Editor: FC<EditorProps> = ({ markdown, setMarkdown }) => {
  return (
    <MDEditor
      value={markdown}
      autoSave="true"
      className="!h-[calc(100vh-113px)] mx-2 !bg-zinc-900 !text-sm"
      onChange={(value) => setMarkdown(value!)}
      previewOptions={{
        style: {
          background: "#18181B",
          height: "100%",
        },
      }}
    />
  );
};

export default Editor;
