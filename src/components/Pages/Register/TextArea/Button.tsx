import { RichUtils, EditorState } from "draft-js";

import { BiItalic } from "react-icons/bi";

interface ButtonTextAreaProps {
  editorState: EditorState;
  setEditorState: (editor: EditorState) => void;
  children: React.ReactNode;
  command: string;
}

export function ButtonStyles({
  editorState,
  setEditorState,
  children,
  command,
}: ButtonTextAreaProps) {
  function handleChangeStyle(editorState: EditorState, commmand: string) {
    let newStateEditor = RichUtils.toggleInlineStyle(editorState, commmand);
    newStateEditor = EditorState.moveFocusToEnd(newStateEditor);

    setEditorState(newStateEditor);
  }

  return (
    <button
      className="rounded-sm bg-gray-400 p-[2px] hover:bg-gray-500"
      onClick={() => handleChangeStyle(editorState, command)}
    >
      {children}
    </button>
  );
}
