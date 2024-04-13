import { TableProps } from '@chakra-ui/react';

export interface IDataItem {
  [key: string]: any;
}

interface IParamsData {
  item: IDataItem;
  rowIndex: number;
}
interface IColumn {
  header: React.ReactNode | string;
  template?: ({ item, rowIndex }: IParamsData) => React.ReactNode;
  name?: string;
}
export interface ITable<T> extends TableProps {
  data: T[];
  columns: IColumn[];
}
