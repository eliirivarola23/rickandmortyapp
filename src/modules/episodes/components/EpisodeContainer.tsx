import { Box, Flex, Grid } from '@chakra-ui/react';
import EpisodeTable from './EpisodeTable';

const itemsData = [
  { specie: 'John', status: 'Alive', id: 5 },
  { specie: 'Jane', status: 'Dead', id: 8 },
  { specie: 'Doe', status: 'unknown', id: 6 },
];

const EpisodeContainer = () => {
  // acá conecta el useContext
  /**
   * verifica que tiene los 2 personajes seleccionados. [{characterOne: 1 }, {characterOne: 1 }]
   * Si tiene ambos, hacer primera petición limitando la longitud.
   * Si quiere
   */
  const handleChangePage = (page: number) => {
    console.log(page);
  };

  return (
    <Box outline="1px solid blue" justifyContent="space-between">
      <Flex flexWrap="wrap" gap={1} outline="1px solid red">
        <EpisodeTable data={itemsData} title="Character 1#" id="Character#1" handleChangePage={handleChangePage} />
        <EpisodeTable data={itemsData} title="Characters 1# & 2#" id="Character#1" handleChangePage={handleChangePage} />
        <EpisodeTable data={itemsData} title="Character 2#" id="Character#1" handleChangePage={handleChangePage} />
      </Flex>
    </Box>
  );
};

export default EpisodeContainer;
