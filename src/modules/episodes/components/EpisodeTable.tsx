import { Flex, Heading, Text } from '@chakra-ui/react';
import Table from '../../../components/Table/Table';
import Loading from '../../../components/Loading/Loading';
import { COLUMN_TEXT } from '../constants/episodeConstants';
import { IData, IEpisodeTable } from '../interfaces/IEpisodeTable';

const EpisodeTable = ({ data, title, isLoading, id }: IEpisodeTable) => {
  return (
    <Flex
      p={2}
      flexDir="column"
      minW="300px"
      flexWrap="wrap"
      outline="1px solid red"
      maxW="30%"
      alignItems="center"
      minH="500px"
      h="max-content"
    >
      <Loading maxW="28%" height="25px" isLoaded={!isLoading}>
        <Heading as="h3" size="sm">
          {title}
        </Heading>
        <Table
          id={id}
          data={data as IData[]}
          columns={[
            {
              header: COLUMN_TEXT.header_episode,
              template: ({ item }) => <Text textTransform="uppercase">{item.episode || ''}</Text>,
            },
            {
              header: COLUMN_TEXT.header_episode_name,
              template: ({ item }) => <Text textTransform="uppercase">{item.name || ''}</Text>,
            },
            {
              header: COLUMN_TEXT.header_air_date,
              template: ({ item }) => <Text textTransform="uppercase">{item.air_date || ''}</Text>,
            },
          ]}
        />
      </Loading>
    </Flex>
  );
};

export default EpisodeTable;
