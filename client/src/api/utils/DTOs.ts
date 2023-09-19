export interface ResponseDto<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface FileDto {
  id: number;
  attributes: {
    name: string;
    url: string;
    alternativeText: string;
    ext: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CategoryDto {
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

export interface PaginationDto {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface DishDto {
  id: number;
  attributes: {
    name: string;
    description: string;
    cookingTimeText: string;
    calories: string;
    categories: CategoryDto[];
    createdAt: string;
    updatedAt: string;
  };
}
