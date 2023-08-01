import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Markdown } from 'tiptap-markdown';
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  markdown: string | undefined;
  setMarkdown: (markdown: string) => void;
}

const Editor: FC<EditorProps> = ({ markdown }) => {
  const editor = useEditor({
    extensions: [StarterKit, Markdown],
    content: markdown,
    editorProps: {
      attributes: {
        class: 'outline-none h-full'
      }
    }
  });

  return (
    <EditorContent
      editor={editor}
      className="!h-[calc(100vh-163px)] mx-2 !bg-zinc-900 !text-sm prose prose-invert prose-sm"
    />
  );
};

export default Editor;
