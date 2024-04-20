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
    <ButtonGroup spacing="2" justifyContent="space-between" w="max-content" alignItems="center">
      <Button onClick={() => handleChangePage(currentPage - initialPage)} isDisabled={isMatchPage} variant="outline" colorScheme="gray">
        Previous
      </Button>
      <Text>{`Page ${currentPage} of ${resultTotalPages}`}</Text>
      <Button onClick={() => handleChangePage(currentPage + initialPage)} isDisabled={currentPage === resultTotalPages} colorScheme="red">
        Next
      </Button>
    </ButtonGroup>
  );
};

export default memo(Paginator);
