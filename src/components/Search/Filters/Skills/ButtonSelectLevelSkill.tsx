import { useState } from "react";
interface ButtonSelectLevelSkillProps {
  label: string;
  checked?: boolean;
  handleChoiseLevelSkill: () => void;
}

export function ButtonSelectLevelSkill({
  label,
  checked = false,
  handleChoiseLevelSkill,
}: ButtonSelectLevelSkillProps) {
  return (
    <div
      onClick={handleChoiseLevelSkill}
      className={`
        hover:
        flex
        h-[25px]
        w-[25px]
        cursor-pointer
        content-center
        items-center
        border-[1px]
        border-borderInput
        text-borderInput hover:bg-main-blue-200
        ${checked ? "bg-main-blue-300" : "bg-off-white"}
        `}
    >
      <span
        className="
      flex 
      h-full
      w-full

      items-center
      justify-center
      "
      >
        {label}
      </span>
    </div>
  );
}
