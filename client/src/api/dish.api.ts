import { PaginationParams } from "./utils/types";

const url = 'dishes/';

export const getDish = () => {};

export const getDishesByCategory = (
  category: string,
  { page, pageSize = 10 }: PaginationParams
) => {};
