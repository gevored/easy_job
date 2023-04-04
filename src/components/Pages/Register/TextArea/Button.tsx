import { RichUtils, EditorState, DraftStyleMap } from "draft-js";
import { useEffect, useState } from "react";
import { getSelectedBlocksType } from "draftjs-utils";

interface ButtonTextAreaProps {
  editorState: EditorState;
  setEditorState: (editor: EditorState) => void;
  children: React.ReactNode;
  command: string;
  mode?: "inline" | "block";
}

export function ButtonStyles({
  editorState,
  setEditorState,
  children,
  command,
  mode = "inline",
}: ButtonTextAreaProps) {
  const [isActived, setIsActived] = useState(false);

  function handleChange(editorState: EditorState, commmand: string) {
    if (mode === "inline") {
      handleChangeInlineStyle(editorState, command);
    } else {
      handlChangeBlockType(editorState, command);
    }
  }

  function handleChangeInlineStyle(editorState: EditorState, commmand: string) {
    let newToggleInlineStyle = RichUtils.toggleInlineStyle(
      editorState,
      commmand
    );

    setIsActived(!isActived);
    setEditorState(newToggleInlineStyle);
  }

  function handlChangeBlockType(editorState: EditorState, commmand: string) {
    let newEditState = RichUtils.toggleBlockType(editorState, commmand);
    setEditorState(newEditState);
  }

  //cada modificação do textarea eu verifico se o estilo que está aplicado corresponde a esse botão
  //caso positivo eu estilizo ele como ativo
  useEffect(() => {
    const style =
      editorState.getCurrentInlineStyle().has(command) ||
      !!(command === getSelectedBlocksType(editorState));

    if (style && !isActived) {
      setIsActived(!isActived);
    } else {
      if (!style && isActived) {
        setIsActived(!isActived);
      }
    }
  }, [editorState]);

  return (
    <button
      className={`rounded-sm  p-[2px] hover:bg-gray-500 ${
        isActived ? "bg-gray-500" : "bg-gray-400"
      }`}
      onClick={() => handleChange(editorState, command)}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) =>
        event.preventDefault()
      }
    >
      {children}
    </button>
  );
}
