import api from 'src/lib/api.instance';
import { PaginationParams } from './utils/types';
import { DishDto } from './utils/DTOs';
import { mapDish, mapMany } from './utils/mappers';

const url = 'dishes/';

export const getDish = async (id: number) => {
  const data = await api.get<DishDto[]>(`${url}dishes`, {
    params: {
      id,
      populate: 'categories',
    },
  });

  return mapDish(data[0]);
};

export const getDishesByCategory = async (
  category: string,
  { page = 1, pageSize = 10 }: PaginationParams
) => {
  const data = await api.get<DishDto[]>(`${url}dishes`, {
    params: {
      populate: 'categories',
      page,
      pageSize,
      categories: {
        categoryName: category,
      },
    },
  });
  return mapMany(data, mapDish);
};
