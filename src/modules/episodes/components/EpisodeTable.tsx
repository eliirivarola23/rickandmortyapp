import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Table from '../../../components/Table/Table';
import Paginator from '../../../components/Paginator/Paginator';

interface IData {
  vehicle: string;
}
const EpisodeTable = ({ data, title, id, handleChangePage }) => {
  return (
    <Flex flexDir="column" flexWrap="wrap" outline="1px solid" maxW="500px" alignItems="center">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Table
        data={data as IData[]}
        columns={[
          {
            header: 'Patente',
            template: ({ item }) => <Text textTransform="uppercase">{item.vehicle || ''}</Text>,
          },
        ]}
      />
      <Paginator totalItems={data?.length} onPageChange={handleChangePage} />
    </Flex>
  );
};

export default EpisodeTable;
