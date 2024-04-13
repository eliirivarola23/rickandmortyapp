import CharacterCard from './CharacterCard'; // Importa el componente CharacterCard
import WithList from '../../../hocs/WithList';
import { Box, Grid } from '@chakra-ui/react';
import Paginator from '../../../components/Paginator/Paginator';

const itemsData = [
  { specie: 'John', status: 'Alive', id: 5 },
  { specie: 'Jane', status: 'Dead', id: 8 },
  { specie: 'Doe', status: 'unknown', id: 6 },
];

const CharacterList = ({ data, key, refetch }) => {
  const CharacterListWrapper = WithList({ Component: CharacterCard, data: data });
  const handleChangePage = (page: number) => {
    console.log(page);
    refetch(page);
  };

  return (
    <Box outline="1px solid blue" maxW="500px">
      <Grid maxW="500px" templateColumns="repeat(auto-fill, minmax(160px, 1fr))" gap={1} outline="1px solid red">
        {CharacterListWrapper}
      </Grid>
      <Paginator totalItems={itemsData?.length} onPageChange={handleChangePage} />
    </Box>
  );
};

export default CharacterList;
