// @ts-nocheck
import { Box, Flex, useToast } from '@chakra-ui/react';
import EpisodeTable from './EpisodeTable';
import { useContext, useEffect, useMemo } from 'react';
import { CharactersContext } from '../../../contexts/CharactersContext';
import { useQuery } from '@tanstack/react-query';
import getCharacterEpisodes from '../adapters/getCharacterEpisodes';
import { CHARACTER_NAMES } from '../../../constants/generalText';
import { CHARACTER_TITLE_WITH_NAMES, SELECTED_CARD_ERRORS_TEXT } from '../constants/episodeConstants';

const EpisodeContainer = () => {
  const toast = useToast();
  const { selectedCards } = useContext(CharactersContext);
  const hasCardsSelected = useMemo(
    () => Object.values(selectedCards).length && Object.values(selectedCards).every(item => item),
    [selectedCards]
  );
  const allValuesEqual = useMemo(
    () => selectedCards[CHARACTER_NAMES.character_one] === selectedCards[CHARACTER_NAMES.character_two],
    [selectedCards]
  );

  const { isLoading, data } = useQuery({
    queryKey: ['episodesList', selectedCards],
    queryFn: () => getCharacterEpisodes(selectedCards),
    retry: false,
    enabled: !!hasCardsSelected && !allValuesEqual,
  });

  const { character1, sharedEpisodes, character2 } = data || {};

  const seeToast = () => {
    toast({
      title: SELECTED_CARD_ERRORS_TEXT.title,
      description: SELECTED_CARD_ERRORS_TEXT.description,
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (allValuesEqual && hasCardsSelected) seeToast();
    // eslint-disable-next-line
    return () => {
      toast.closeAll();
    };
  }, [selectedCards]);

  if (!hasCardsSelected) return null;

  return (
    <Box justifyContent="space-between">
      <Flex flexWrap="wrap" gap={1} justifyContent="space-between">
        <EpisodeTable
          data={character1?.episode}
          title={CHARACTER_TITLE_WITH_NAMES[CHARACTER_NAMES.character_one](character1?.name)}
          id={CHARACTER_NAMES.character_one}
          isLoading={isLoading}
        />
        <EpisodeTable
          data={sharedEpisodes}
          title={CHARACTER_TITLE_WITH_NAMES[CHARACTER_NAMES.shared_episodes](character1?.name, character2?.name)}
          id={CHARACTER_NAMES.shared_episodes}
          isLoading={isLoading}
        />
        <EpisodeTable
          data={character2?.episode}
          title={CHARACTER_TITLE_WITH_NAMES[CHARACTER_NAMES.character_two](character2?.name)}
          id={CHARACTER_NAMES.character_two}
          isLoading={isLoading}
        />
      </Flex>
    </Box>
  );
};

export default EpisodeContainer;
