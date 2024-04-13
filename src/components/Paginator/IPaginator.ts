export interface IPropsPaginator {
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  initialPage?: number;
}
