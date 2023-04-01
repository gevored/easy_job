import { useState, useId } from "react";
import { GoPlusSmall } from "react-icons/go";
import { RowSkill } from "./RowSkill";
import dynamic from "next/dynamic";
import Select from "react-select";

const options = [
  { value: "javascript", label: "Javascript" },
  { value: "Typescript", label: "Typescript" },
  { value: "React", label: "React" },
  { value: "Next", label: "Next" },
  { value: "Tailwind", label: "Tailwind" },
];

export function SelectInput() {
  const [skill, setSkill] = useState("");
  const [listSkill, setListSkill] = useState<Set<string>>(new Set());

  function handleAddSkill() {
    if (skill) {
      const newSet = new Set([...Array.from(listSkill), skill]);
      setListSkill(newSet);
    }
  }

  const SelectDynamic = dynamic(import("react-select"), { ssr: false });

  return (
    <>
      <div className="flex h-[42px] w-[300px] justify-between rounded-[4px] border-[1px] border-borderInput">
        <div className=" h-full w-full">
          <SelectDynamic
            id={useId()}
            instanceId={useId()}
            onChange={(e: any) => setSkill(e.value)}
            options={options}
            styles={{
              control: (baseStyles, state) => {
                return {
                  ...baseStyles,
                  width: "100%",
                  boxShadow: "none",
                  outline: "none",
                  borderColor: state.isFocused ? "none" : "none",
                  border: "none",
                };
              },
            }}
          />
        </div>
        <button
          onClick={handleAddSkill}
          className="flex h-full w-auto items-center justify-center bg-gray-400 px-[3px] hover:bg-gray-500 active:bg-gray-600"
        >
          <GoPlusSmall size={24} color="#cccccc" />
        </button>
      </div>

      <div
        className={`${
          listSkill.size == 0 ? "invisible" : "block"
        } flex max-h-[93px]
        flex-col
        gap-2
        overflow-y-scroll
        pr-[14px]
        `}
      >
        {Array.from(listSkill).map((skill) => (
          <RowSkill nameSkill={skill} />
        ))}
      </div>
    </>
  );
}
