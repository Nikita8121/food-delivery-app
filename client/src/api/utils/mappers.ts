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
  const mapPrice = (
    priceDto: DishDto['attributes']['price'][0]
  ): IDish['price'][0] => {
    return {
      id: priceDto.id,
      size: priceDto.size,
      price: priceDto.price,
    };
  };

  console.log('image', dto.attributes.image?.data);
  console.log('category', dto.attributes.categories?.data);
  return {
    id: dto.id,
    name: dto.attributes.name,
    description: dto.attributes.description,
    cookingTimeText: dto.attributes.cookingTimeText,
    calories: dto.attributes.calories,
    categories: dto.attributes.categories?.data
      ? mapMany(dto.attributes.categories.data, mapCategory)
      : undefined,
    image: mapFile(dto.attributes.image.data),
    price: mapMany(dto.attributes.price, mapPrice),
    createdAt: dto.attributes.createdAt,
    updatedAt: dto.attributes.updatedAt,
  };
};
