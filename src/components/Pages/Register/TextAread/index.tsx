import { useState } from "react";
import dynamic from "next/dynamic";

import { EditorProps } from "react-draft-wysiwyg";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export function TextArea() {
  const [editorState, setEditorState] = useState();
  return (
    <div className="h-full w-full">
      <Editor
        editorState={editorState}
        toolbarClassName=""
        wrapperClassName="h-full"
        editorClassName="h-full border-4 border-input "
        onEditorStateChange={(e: any) => setEditorState(e)}
      />
    </div>
  );
}
