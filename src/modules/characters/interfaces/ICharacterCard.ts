export interface PropsCharacterCard {
  image: string;
  status: string;
  species: string;
  name: string;
  episodes: number;
  id: number | string;
  onClick?: (id?: PropsCharacterCard['id']) => void;
  selectedIdCard?: PropsCharacterCard['id'];
}
