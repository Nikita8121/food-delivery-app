import api from 'src/lib/api.instance';
import { mapCategory } from './utils/mappers';
import { CategoryDto, ResponseDto } from './utils/DTOs';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { ICategory } from 'src/models/category.model';

const url = 'categories';

const mapCategories = (dto: CategoryDto[]) => {
  return dto.map((cat) => mapCategory(cat));
};

const getCategories = async () => {
  const data = await api.get<ResponseDto<CategoryDto[]>>(`${url}`, {
    params: {
      populate: 'categoryIcon',
    },
  });
  return mapCategories(data.data);
};

export const useCategoryQuery = (options?: UseQueryOptions<ICategory[]>) =>
  useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...options,
  });
