import { memo, useMemo, useState } from 'react';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { IPropsPaginator } from './IPaginator';

const Paginator = ({ totalItems = 0, page, itemsPerPage = 0, onPageChange, totalPages, initialPage = 1 }: IPropsPaginator) => {
  const countNum = page || initialPage;
  const [currentPage, setCurrentPage] = useState(countNum);
  const resultTotalPages = totalPages || Math.ceil(totalItems / itemsPerPage);
  const isMatchPage = useMemo(() => currentPage === initialPage, [initialPage, currentPage]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <ButtonGroup
      m="10px 0"
      spacing="2"
      borderRadius="15px"
      p={3}
      justifyContent="space-between"
      alignItems="center"
      bg="var(--color-black-tertiary)"
      flexWrap="wrap"
    >
      <Button onClick={() => handleChangePage(currentPage - initialPage)} isDisabled={isMatchPage} borderRadius="18px">
        Previous
      </Button>
      <Text>{`Page ${currentPage} of ${resultTotalPages}`}</Text>
      <Button
        onClick={() => handleChangePage(currentPage + initialPage)}
        isDisabled={currentPage === resultTotalPages}
        colorScheme="red"
        borderRadius="18px"
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default memo(Paginator);
