import { CHARACTER_NAMES } from '../../../constants/generalText';
import CharacterList from './CharacterList';
import { Box } from '@chakra-ui/react';

const CharacterContainer = () => {
  return (
    <Box outline="1px solid yellow" display="flex" flexWrap="wrap" justifyContent="space-between">
      <CharacterList />
      <CharacterList title={CHARACTER_NAMES.character_two} />
    </Box>
  );
};

export default CharacterContainer;
