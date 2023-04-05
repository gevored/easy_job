import { SelectInput } from "@/components/Search/Filters/Skills/SelectInput";
import { EditorState } from "react-draft-wysiwyg";
import { useState } from "react";
// import { TextArea } from "./TextArea";
import dynamic from "next/dynamic";
import { Local } from "@/components/Local";
import {
  RegisterContext,
  useRegisterJobContext,
} from "@/context/RegisterContext";

const TextArea = dynamic(() => import("./TextArea"), {
  ssr: false,
});

export function Register() {
  const [editorState, setEditorState] = useState<EditorState>();

  function handleSetDescriptionJob(description: EditorState) {
    console.log(description);
  }

  function handleRegisterJob() {}

  return (
    <RegisterContext>
      <div className="flex h-full flex-col items-center  justify-start ">
        <div className="h-[600px] ">
          <input
            type="text"
            placeholder="Titulo da Vaga"
            className="h-[40px] w-full rounded-[6px] border-[0.5px] border-gray-400 pl-[5px]  placeholder:text-borderInput"
          />
          <Local tailwindClass="flex gap-[20px] mt-[15px]" />
          <div className="h-full w-[1200px]">
            <TextArea />
          </div>
        </div>
        <div
          className="relative top-[40px]
         flex 
         h-[300px]
         w-full
         justify-around
      "
        >
          <div>
            <strong>Main Skill</strong>
            <SelectInput />
          </div>

          <div>
            <strong>Opicionais Skill</strong>
            <SelectInput />
          </div>
        </div>
        <div className="flex w-[80%] justify-end ">
          <button
            onClick={handleRegisterJob}
            className="my-[20px] rounded-md bg-main-blue-300 p-[10px] text-white hover:bg-main-blue-200"
          >
            Registrar Vaga
          </button>
        </div>
      </div>
    </RegisterContext>
  );
}
