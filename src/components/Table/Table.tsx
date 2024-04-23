// @ts-nocheck
import { Table as TableChakra, Thead, Tbody, Tr, Th, Td, TableContainer, Tooltip } from '@chakra-ui/react';
import { IDataItem, ITable } from './ITable';
import { messageNoResultText } from '../../constants/generalText';

const Table = <T extends object>({ data, id, columns, variant = 'simple', w = '100vw', sx }: ITable<T>) => {
  const getValue = (item: IDataItem, key?: string) => {
    if (!key) return '';
    return key in item ? item[key] : '';
  };

  return (
    <TableContainer w={w}>
      <TableChakra variant={variant} size="lg" w="100%">
        <Thead>
          {data?.length > 0 && (
            <Tr>
              {columns?.map((column, index) => (
                <Th p="12px" key={index} maxW="100px">
                  {column.header}
                </Th>
              ))}
            </Tr>
          )}
        </Thead>
        <Tbody>
          {!data?.length && (
            <Tr p={5}>
              <Td textAlign="center">{messageNoResultText}</Td>
            </Tr>
          )}
          {data?.map((item, rowIndex) => (
            <Tr key={`Tr_${id}_${rowIndex}`}>
              {columns?.map((column, colIndex) => {
                const value = column.template ? column.template({ item, rowIndex }) : getValue(item, column.name);
                return (
                  <Tooltip key={`Td_${id}_${colIndex}`} label={value} isTruncated>
                    <Td sx={{ textTransform: 'capitalize', padding: '12px 5px', ...(sx || { sx }) }} maxW="100px" isTruncated>
                      {value}
                    </Td>
                  </Tooltip>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default Table;
