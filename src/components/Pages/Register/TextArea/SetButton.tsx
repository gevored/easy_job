import { EditorState, RichUtils } from "draft-js";
import { BiItalic, BiBold, BiUnderline } from "react-icons/bi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import {
  GrOrderedList,
  GrTextAlignCenter,
  GrTextAlignLeft,
  GrTextAlignRight,
} from "react-icons/gr";
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

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="UNDERLINE"
      >
        <BiUnderline color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="unordered-list-item"
        mode="block"
      >
        <MdOutlineFormatListBulleted color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="ordered-list-item"
        mode="block"
      >
        <GrOrderedList color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="align-left"
        mode="block"
      >
        <GrTextAlignLeft color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="align-center"
        mode="block"
      >
        <GrTextAlignCenter color="white" />
      </ButtonStyles>

      <ButtonStyles
        editorState={editorState}
        setEditorState={setEditorState}
        command="align-right"
        mode="block"
      >
        <GrTextAlignRight color="white" />
      </ButtonStyles>
    </div>
  );
}
