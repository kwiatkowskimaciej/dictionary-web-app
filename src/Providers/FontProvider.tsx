'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IFontContext {
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<any>>;
}

const FontContext = createContext<IFontContext>({
  fontFamily: '',
  setFontFamily: () => {},
});

export function FontProvider({ children }: { children: ReactNode }) {
  let [fontFamily, setFontFamily] = useState('serif');

  return (
    <FontContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFontState() {
  return useContext(FontContext);
}
