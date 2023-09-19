import { IFile } from 'src/models/file.model';
import { SERVER_URL } from '@env';
import { ICategory } from 'src/models/category.model';
import { CategoryDto, DishDto, FileDto, ResponseDto } from './DTOs';
import { IDish } from 'src/models/dish.model';

export const mapFile = (dto: FileDto): IFile => {
  return {
    id: dto.id,
    name: dto.attributes.name,
    url: SERVER_URL + dto.attributes.url,
    alternativeText: dto.attributes.alternativeText,
    ext: dto.attributes.ext,
    createdAt: dto.attributes.createdAt,
    updatedAt: dto.attributes.updatedAt,
  };
};

export const mapMany = <T, U>(arrayDtos: T[], mapper: (DishDto: T) => U) => {
  return arrayDtos.map((el) => mapper(el));
};

export const mapDataWithPagination = <T>(
  data: T,
  paginationData: ResponseDto<T>['meta']['pagination']
) => {
  return {
    data,
    pagination: paginationData,
  };
};

export const mapCategory = (dto: CategoryDto): ICategory => {
  return {
    id: dto.id,
    categoryName: dto.attributes.categoryName,
    createdAt: dto.attributes.createdAt,
    updatedAt: dto.attributes.updatedAt,
    categoryIcon: mapFile(dto.attributes.categoryIcon.data),
  };
};

export const mapDish = (dto: DishDto): IDish => {
  return {
    id: dto.id,
    name: dto.attributes.name,
    description: dto.attributes.description,
    cookingTimeText: dto.attributes.cookingTimeText,
    calories: dto.attributes.calories,
    categories: mapMany(dto.attributes.categories, mapCategory),
    createdAt: dto.attributes.createdAt,
    updatedAt: dto.attributes.updatedAt,
  };
};
