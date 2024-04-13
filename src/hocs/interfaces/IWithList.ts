export interface IListProps<T> {
  Component: React.ComponentType<T>;
  id?: string;
  data: T[];
}
