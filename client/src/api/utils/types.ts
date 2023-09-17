export interface FileDto {
  id: number;
  name: string;
  url: string;
  alternativeText: string;
  ext: string;
  createdAt: string;
  updatedAt: string;
}

export type PaginationParams = {
  page: number;
  pageSize: number;
};
