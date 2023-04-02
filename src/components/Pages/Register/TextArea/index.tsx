import { Editor, EditorState, RichUtils } from "draft-js";
import { useState, useRef } from "react";
import { SetButton } from "./SetButton";
import "draft-js/dist/Draft.css";

export default function TextArea() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  //it will enable command like ctrl + b = the next writen text will be bold
  function handleKeyCommand(command: string, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  return (
    <div className="my-[10px] h-[calc(100%-40px)] border-2 border-red-800">
      <SetButton editorState={editorState} setEditorState={setEditorState} />
      <Editor
        ref={useRef(null)}
        editorKey="editor"
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Descrição da Vaga"
      />
    </div>
  );
}
