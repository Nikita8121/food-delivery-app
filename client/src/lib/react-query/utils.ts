import { ResponseDto } from 'src/api/utils/DTOs';

export const getNextPaginationPage = (
  pagination: ResponseDto<unknown>['meta']['pagination']
) => {
  if (pagination!.page < pagination!.pageCount) return pagination!.page;

  return pagination!.pageCount;
};
