import { Local } from "../../Local/index";
import { Skills } from "./Skills/Skills";

export function Filters() {
  return (
    <div className="relative h-full pl-5 pt-5">
      <h1>Escolhas as habilidades procuradas</h1>
      <div className="relative top-[20px] flex h-full max-w-lg flex-col gap-[40px]">
        <Skills />
        <Local title="Localização" tailwindClass="flex flex-col gap-[20px]" />
        {/* <Local /> */}
      </div>
    </div>
  );
}
