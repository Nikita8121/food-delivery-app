import api from 'src/lib/api.instance';
import { DataWithPagiantion, PaginationParams } from './utils/types';
import { DishDto, ResponseDto } from './utils/DTOs';
import { mapDataWithPagination, mapDish, mapMany } from './utils/mappers';
import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { IDish } from 'src/models/dish.model';

const url = 'dishes/';

const getDish = async (id: number) => {
  const data = await api.get<DishDto[]>(`${url}dishes`, {
    params: {
      id,
      populate: 'categories',
    },
  });

  return mapDish(data[0]);
};

const getDishesByCategory = async (
  category: string,
  { page = 0, pageSize = 10 }: PaginationParams
) => {
  const data = await api.get<ResponseDto<DishDto[]>>(`${url}dishes`, {
    params: {
      page,
      pageSize,
      categories: {
        categoryName: category,
      },
    },
  });
  return mapDataWithPagination(
    mapMany(data.data, mapDish),
    data.meta?.pagination
  );
};

export const useGetDish = (id: number, options?: UseQueryOptions<IDish>) =>
  useQuery<IDish>({
    queryKey: ['dish', id],
    queryFn: () => getDish(id),
    ...options,
  });

export const useGetDishesByCategory = (
  category: string,
  options?: UseInfiniteQueryOptions<DataWithPagiantion<IDish[]>>
) =>
  useInfiniteQuery<DataWithPagiantion<IDish[]>>({
    queryKey: ['dishes', category],
    queryFn: ({ pageParam = 0 }) =>
      getDishesByCategory(category, { page: pageParam, pageSize: 10 }),
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.pagination?.page as number) + 1,
    ...options,
  });
