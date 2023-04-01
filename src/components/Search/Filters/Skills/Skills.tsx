import { GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { SelectInput } from "./SelectInput";
export function Skills() {
  const [display, setDisplay] = useState("hidden");

  function handleCollapse() {
    const newDisplay = display === "hidden" ? "" : "hidden";
    setDisplay(newDisplay);
  }

  return (
    <div className="flex max-h-[400px] min-h-[250px] w-[400px] flex-col gap-2 ">
      <span className="flex gap-[5px] ">
        <span
          className=" cursor-pointer rounded-md bg-gray-300"
          onClick={handleCollapse}
        >
          <GoChevronRight />
        </span>
        <strong>Skill</strong>
      </span>
      <div className={`${display} delay-175 flex flex-col gap-[15px]  `}>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-lg">Main skills</h2>
          <SelectInput />
        </div>
        <div className="divide-x-2 border-[1px]"></div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-lg">Secondary skills</h2>
          <SelectInput />
        </div>
      </div>
    </div>
  );
}
