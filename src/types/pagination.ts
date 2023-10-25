export type PagingObj = {
  limit: number;
  page: number;
};

export type Meta = {
  totalDocs: number | undefined;
  limit: number | undefined;
  totalPages: number | undefined;
  page: number | undefined;
  pagingCounter: number | undefined;
  hasPrevPage: Boolean | undefined;
  hasNextPage: Boolean | undefined;
  prevPage: number | undefined;
  nextPage: number | undefined;
  hasMore: Boolean | undefined;
};