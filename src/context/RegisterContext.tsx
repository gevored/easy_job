import { createContext, ReactNode, useContext, useState } from "react";

interface Iskill {
  nameSkill: string;
  levelSkil: string;
}

interface IRegisterJob {
  title: string;
  state: string;
  city: string;
  description: string;
  listSkill: Iskill[];
}
const ThemeContext = createContext({} as IRegisterJob);

interface RegisterContextProps {
  children: ReactNode;
}

export function RegisterContext({ children }: RegisterContextProps) {
  const [jobDescription, setJobDescription] = useState({} as IRegisterJob);
  return (
    <ThemeContext.Provider value={{} as IRegisterJob}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useRegisterJobContext = useContext(ThemeContext);
