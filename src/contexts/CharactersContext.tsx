import { createContext, useState } from 'react';

export const CharactersContext = createContext({});

export const CharactersProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCards, setSelectedCards]: any[] = useState([]);

  const selectCard = (card: string | number) => {
    setSelectedCards([...selectedCards, card]);
  };

  return <CharactersContext.Provider value={{ selectedCards, selectCard }}>{children}</CharactersContext.Provider>;
};
