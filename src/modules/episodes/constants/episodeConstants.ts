import { CHARACTER_NAMES } from '../../../constants/generalText';

export const SELECTED_CARD_ERRORS_TEXT = {
  title: 'No se puede seleccionar 2 personajes iguales',
  description: 'Intenta seleccionando otro',
};
export const CHARACTER_TITLE_WITH_NAMES = {
  [CHARACTER_NAMES.shared_episodes]: (characterName, characterNameSecondary) =>
    `${CHARACTER_NAMES.shared_episodes}- Shared Episodes  ${characterName || ''} & ${characterNameSecondary || ''}`,
  [CHARACTER_NAMES.character_one]: name => `${CHARACTER_NAMES.character_one} ${name || ''}`,
  [CHARACTER_NAMES.character_two]: name => `${CHARACTER_NAMES.character_two} ${name || ''}`,
};

export const COLUMN_TEXT = {
  header_episode: 'ID Episode',
  header_episode_name: 'Episode name',
  header_air_date: 'Air Date',
};
