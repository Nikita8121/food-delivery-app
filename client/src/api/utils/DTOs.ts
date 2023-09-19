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
