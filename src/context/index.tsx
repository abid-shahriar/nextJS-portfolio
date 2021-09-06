import { useContext, createContext, useState } from 'react';

interface globalStatesInt {
  setToggleMenu?: any;
  toggleMenu?: any;
}

const globalStates: any = createContext<globalStatesInt | undefined>(undefined);

export const useGlobalState = (): globalStatesInt => {
  return useContext(globalStates);
};

export default function Context(props: any) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const states = {
    setToggleMenu,
    toggleMenu
  };

  return <globalStates.Provider value={states}>{props.children}</globalStates.Provider>;
}
