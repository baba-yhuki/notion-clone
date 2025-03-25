import { locales } from "@blocknote/core";
import { useCreateBlockNote, BlockNoteViewRaw } from "@blocknote/react";
import "@blocknote/mantine/style.css";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string | null;
}

function Editor({ onChange, initialContent }: EditorProps) {
  const editor = useCreateBlockNote({
    dictionary: locales.ja,
    initialContent:
      initialContent != null ? JSON.parse(initialContent) : undefined,
  });
  return (
    <div>
      <BlockNoteViewRaw
        editor={editor as any}
        onChange={() => onChange(JSON.stringify(editor.document))}
      />
    </div>
  );
}

export default Editor;
