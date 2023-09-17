import api from 'src/lib/api.instance';
import { FileDto } from './utils/types';
import { ICategory } from 'src/models/category.model';
import { mapFile } from './utils/commonMappers';

const url = 'categories/';

interface CategoryDto {
  id: number;
  attributes: {
    categoryName: string;
    createdAt: string;
    updatedAt: string;
    categoryIcon: {
      data: FileDto;
    };
  };
}

const mapCategory = (dto: CategoryDto): ICategory => {
  return {
    id: dto.id,
    categoryName: dto.attributes.categoryName,
    createdAt: dto.attributes.createdAt,
    updatedAt: dto.attributes.updatedAt,
    categoryIcon: mapFile(dto.attributes.categoryIcon.data),
  };
};

const mapCategories = (dto: CategoryDto[]) => {
  return dto.map((cat) => mapCategory(cat));
};

export const getCategories = async () => {
  const data = await api.get<CategoryDto[]>(`${url}`, {
    params: {
      populate: 'categoryIcon',
    },
  });
  return mapCategories(data);
};
