// @ts-nocheck
import CharacterCard from './CharacterCard';
import WithList from '../../../hocs/WithList';
import { Box, Grid, Heading } from '@chakra-ui/react';
import Paginator from '../../../components/Paginator/Paginator';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import getCharacterList from '../adapters/getCharacterList';
import { CharactersContext } from '../../../contexts/CharactersContext';
import Loading from '../../../components/Loading/Loading';
import { CHARACTER_NAMES } from '../../../constants/generalText';
import { PropsCharacterCard } from '../interfaces/ICharacterCard';

const CharacterList = ({ title = CHARACTER_NAMES.character_one }) => {
  const [page, setPage] = useState(0);
  const { handleCardSelected, selectedCards, data: dataGeneral, isLoading: isLoadingDataGeneral } = useContext(CharactersContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [title, { page }],
    queryFn: getCharacterList,
    retry: false,
    enabled: !!page,
  });

  const handleClickCard = (id: number) => handleCardSelected(title, id);
  const latestData: any = page ? data : dataGeneral;

  const CharacterListWrapper = WithList({
    Component: CharacterCard as React.ComponentType<Partial<PropsCharacterCard>>,
    data: latestData?.results || [],
    onClick: handleClickCard,
    selectedIdCard: selectedCards[title],
  });
  const handleChangePage = (page: number) => setPage(page);

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Box w={{ base: '42vw', lg: '45vw' }} p={2} textAlign={title === CHARACTER_NAMES.character_two ? 'end' : 'start'}>
      <Heading as="h3" size="md" m={3}>
        {title}
      </Heading>
      <Grid bg="var(--color-black-tertiary)" borderRadius="18px" p={{ base: 1, lg: 3 }}>
        <Loading
          isLoaded={!isLoading && !isLoadingDataGeneral}
          repeatSkeleton={10}
          h="200px"
          w="150px"
          styleStack={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
        >
          <Grid templateColumns="repeat(auto-fill, minmax(110px, 1fr))" gap={1}>
            {CharacterListWrapper}
          </Grid>
        </Loading>
      </Grid>
      <Grid>
        <Paginator page={page} totalPages={data?.info?.pages || dataGeneral?.info?.pages} onPageChange={handleChangePage} />
      </Grid>
    </Box>
  );
};

export default CharacterList;
