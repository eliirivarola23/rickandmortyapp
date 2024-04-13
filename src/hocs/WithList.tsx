import { Text } from '@chakra-ui/react';
import { IListProps } from './interfaces/IWithList';
import { messageNoResultText } from '../constants/generalText';

const WithList = <T,>({ Component, data }: IListProps<T>) => {
  if (!data?.length) return <Text>{messageNoResultText}</Text>;
  return (
    <>
      {data?.map((item, index) => {
        return <Component key={`List_${index}`} {...item} />;
      })}
    </>
  );
};
export default WithList;
