import { IListProps } from './interfaces/IWithList';

const WithList = <T,>({ Component, data, ...res }: IListProps<T>) => {
  return (
    <>
      {data?.map((item, index) => {
        return <Component key={`List_${index}`} {...{ ...res, ...item }} />;
      })}
    </>
  );
};
export default WithList;
