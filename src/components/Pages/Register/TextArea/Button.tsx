import { RichUtils, EditorState, DraftStyleMap } from "draft-js";
import { useEffect, useState } from "react";
import { getSelectedBlocksType, Modifier, Map } from "draftjs-utils";

interface ButtonTextAreaProps {
  editorState: EditorState;
  setEditorState: (editor: EditorState) => void;
  children: React.ReactNode;
  command: string;
  mode?: "inline" | "block" | "change-block-data";
}

export function ButtonStyles({
  editorState,
  setEditorState,
  children,
  command,
  mode = "inline",
}: ButtonTextAreaProps) {
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
    setEditorState(newToggleInlineStyle);
  }

  function handlChangeBlockType(editorState: EditorState, commmand: string) {
    let newEditState = RichUtils.toggleBlockType(editorState, commmand);
    setEditorState(newEditState);
  }

  const isActivated =
    editorState.getCurrentInlineStyle().has(command) ||
    !!(command === getSelectedBlocksType(editorState));
  return (
    <button
      className={`rounded-sm  p-[5px] hover:bg-gray-500 ${
        isActivated ? "bg-gray-500" : "bg-gray-400"
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
