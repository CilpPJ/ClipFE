import type { ClipContents } from '@/entities';

export type GetAllClipsParameter = {
  lastCreatedAt: string;
  size: number;
};

type Sort = {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
};

type Pageable = {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
};

export type AllClipsResponse = {
  size: number;
  content: ClipContents[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
};
