import { EditorState, RichUtils } from "draft-js";
import { BiItalic, BiBold } from "react-icons/bi";
import { ButtonStyles } from "./Button";

interface ButtonTextAreaProps {
  editorState: EditorState;
  setEditorState: (editor: EditorState) => void;
}

export function SetButton({
  editorState,
  setEditorState,
}: ButtonTextAreaProps) {
  return (
    <div className="m-[2px] flex gap-[2px]">
      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="ITALIC"
      >
        <BiItalic color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="BOLD"
      >
        <BiBold color="white" />
      </ButtonStyles>
    </div>
  );
}
