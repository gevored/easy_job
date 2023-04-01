import { useState } from "react";
import Select from "react-select";
import { state } from "./utils/states";
import { citys } from "./utils/city";

interface City {
  ID: string;
  label: string;
  Estado: string;
}
export function Local() {
  const [stateSelected, setStateSelected] = useState("");
  const [city, setCity] = useState<City>();
  const [listCity, setListCity] = useState<City[]>();

  function handleSelectedState(e: any) {
    setStateSelected(e.label);

    const citysFiltered = citys.filter((city) => city.Estado === e.ID);
    setListCity(citysFiltered);

    setCity({
      label: "Cidade",
      Estado: "",
      ID: "",
    });
  }

  return (
    <div className="flex flex-col gap-[20px] ">
      <h1>Localização</h1>
      <div className="h-[42px] w-[300px] border-[1px] border-borderInput ">
        <Select
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
          placeholder="Estado"
          onChange={handleSelectedState}
          options={state}
        />
      </div>
      <div className="h-[42px] w-[300px] border-[1px] border-borderInput ">
        <Select
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
          placeholder="Cidade"
          value={city}
          onChange={(e: any) => setCity(e.value)}
          options={listCity}
        />
      </div>
    </div>
  );
}
