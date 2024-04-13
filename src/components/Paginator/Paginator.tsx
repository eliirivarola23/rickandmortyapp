import { memo, useMemo, useState } from 'react';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { IPropsPaginator } from './IPaginator';

const Paginator = ({ totalItems = 0, itemsPerPage = 2, onPageChange, initialPage = 1 }: IPropsPaginator) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isMatchPage = useMemo(() => currentPage === initialPage, [initialPage, currentPage]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  //   if (isMatchPage || !totalItems) return null;

  return (
    <ButtonGroup spacing="2" justifyContent="space-between" w="max-content" alignItems="center">
      <Button onClick={() => handleChangePage(currentPage - initialPage)} isDisabled={isMatchPage} variant="outline" colorScheme="gray">
        Previous
      </Button>
      <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
      <Button onClick={() => handleChangePage(currentPage + initialPage)} isDisabled={currentPage === totalPages} colorScheme="red">
        Next
      </Button>
    </ButtonGroup>
  );
};

export default memo(Paginator);
