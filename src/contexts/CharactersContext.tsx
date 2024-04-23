// @ts-nocheck:
import { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getCharacterList from '../modules/characters/adapters/getCharacterList';
import { CHARACTER_NAMES } from '../constants/generalText';

interface ISelectedCard {
  [x: string]: number;
}
interface IContext {
  selectedCards: ISelectedCard;
  handleCardSelected: (character: string, card: number) => void;
  isLoading: boolean;
  data: object;
}
const initialState = { [CHARACTER_NAMES.character_one]: 0, [CHARACTER_NAMES.character_two]: 0 };

const initialContext = {
  selectedCards: initialState,
  handleCardSelected: () => {},
  isLoading: true,
  data: {},
};

export const CharactersContext = createContext<IContext>(initialContext);

export const CharactersProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCards, setSelectedCards] = useState(initialState);
  const infoQuery = useQuery({ queryKey: ['characterList'], queryFn: getCharacterList, retry: false });
  const handleCardSelected = (character: string, card: number) => setSelectedCards({ ...selectedCards, [character]: card });

  return <CharactersContext.Provider value={{ selectedCards, handleCardSelected, ...infoQuery }}>{children}</CharactersContext.Provider>;
};
