import { mapDataWithPagination } from './mappers';

export type PaginationParams = {
  page: number;
  pageSize: number;
};

export type DataWithPagiantion<T> = ReturnType<typeof mapDataWithPagination<T>>;
