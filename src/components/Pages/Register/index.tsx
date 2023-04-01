import { TextArea } from "./TextAread";

export function Register() {
  return (
    <div className="flex h-full flex-col items-center  justify-start">
      <div className="md:h-[300px] lg:h-[350px]">
        <input
          type="text"
          placeholder="Titulo da Vaga"
          className="h-[40px] w-full rounded-[6px] border-[0.5px] border-input pl-[5px] placeholder-input"
        />
        <div className="h-full w-[1000px]">
          <TextArea />
        </div>

        <div>
          <div>
            <select name="" id=""></select>
          </div>
          <div>
            <select name="" id=""></select>
          </div>
        </div>
      </div>
    </div>
  );
}
