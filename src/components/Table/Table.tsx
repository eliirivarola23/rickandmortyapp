import { Table as TableChakra, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { IDataItem, ITable } from './ITable';

const Table = <T extends object>({ data, id, columns, variant = 'simple', w = '100vw', sx }: ITable<T>) => {
  const getValue = (item: IDataItem, key?: string): any => {
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
                <Th key={index}>{column.header}</Th>
              ))}
            </Tr>
          )}
        </Thead>
        <Tbody>
          {data?.map((item, rowIndex) => (
            <Tr key={`Tr_${id}_${rowIndex}`}>
              {columns?.map((column, colIndex) => (
                <Td key={`Td_${id}_${colIndex}`} sx={{ textTransform: 'capitalize', ...(sx || { sx }) }}>
                  {column.template ? column.template({ item, rowIndex }) : getValue(item, column.name)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default Table;
