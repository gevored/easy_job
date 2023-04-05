import {
  ContentBlock,
  DraftBlockType,
  Editor,
  EditorBlock,
  EditorState,
  Modifier,
  RichUtils,
  getDefaultKeyBinding,
} from "draft-js";
import { useState, useRef, KeyboardEvent } from "react";
import { SetButton } from "./SetButton";
import "draft-js/dist/Draft.css";
import { SyntheticKeyboardEvent } from "react-draft-wysiwyg";

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

  function myBlockStyleFn(contentBlock: ContentBlock) {
    const type = contentBlock.getType();

    if (type === "align-center") return "w-full flex justify-center flex";
    if (type === "align-left") return "w-full flex justify-start text-left";
    if (type === "align-right") return "w-full flex justify-end text-right";

    return "";
  }

  function handleKeyBindings(e: SyntheticKeyboardEvent) {
    console.log(e);
    if (e.key === "Tab") {
      let newContentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        "\t"
      );

      setEditorState(
        EditorState.push(editorState, newContentState, "insert-characters")
      );

      e.preventDefault(); // For good measure. (?)
      return null;
    }

    return getDefaultKeyBinding(e);
  }

  return (
    <div className="my-[10px] h-[calc(100%-82px)] max-h-[520px] overflow-scroll border-2 border-borderInput">
      <SetButton editorState={editorState} setEditorState={setEditorState} />
      <Editor
        onTab={handleKeyBindings}
        ref={useRef(null)}
        editorKey="editor"
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Descrição da Vaga"
        blockStyleFn={myBlockStyleFn}
      />
    </div>
  );
}
