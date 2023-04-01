import { Filters } from "./Filters/Filters";
export function Search() {
  return (
    <div className="flex h-full justify-center ">
      <div className="mx-2 w-full min-w-[1200px]">
        <Filters />
      </div>
    </div>
  );
}
