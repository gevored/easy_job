import { useState } from "react";
import { ButtonSelectLevelSkill } from "./ButtonSelectLevelSkill";

interface RowSkillProps {
  nameSkill: string;
}
export function RowSkill({ nameSkill }: RowSkillProps) {
  const [level, setLevel] = useState("");
  return (
    <div className="flex w-full items-baseline justify-between">
      <span>{nameSkill}</span>
      <div className="flex gap-2">
        <ButtonSelectLevelSkill
          label="1+"
          handleChoiseLevelSkill={() => setLevel("+1")}
          checked={level === "+1"}
        />
        <ButtonSelectLevelSkill
          label="3+"
          handleChoiseLevelSkill={() => setLevel("+3")}
          checked={level === "+3"}
        />
        <ButtonSelectLevelSkill
          label="5+"
          handleChoiseLevelSkill={() => setLevel("+5")}
          checked={level === "+5"}
        />
        <ButtonSelectLevelSkill
          label="7+"
          handleChoiseLevelSkill={() => setLevel("+7")}
          checked={level === "+7"}
        />
      </div>
    </div>
  );
}
