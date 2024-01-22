import { useState, createContext, ReactNode, useContext } from 'react';

export interface INamesContext {
  names: {
    firstName: string;
    lastName: string;
  };
  setNames: (value: any) => void;
}

const defaultNamesState = {
  firstName: '',
  lastName: ''
};

export const NameContext = createContext<INamesContext>({ names: defaultNamesState } as INamesContext);

interface Props {
  children: ReactNode
}

export const UseContextExampleProvider = (props: Props): JSX.Element => {

  const [names, setNames] = useState(defaultNamesState);

  const value = {
    names,
    setNames
  };

  return (
    <NameContext.Provider value={value}>
      {props.children}
    </NameContext.Provider>
  );
};

export const useNameContext = (): INamesContext => {
  return useContext<INamesContext>(NameContext);
}