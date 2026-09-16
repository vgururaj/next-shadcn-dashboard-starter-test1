import { queryOptions } from '@tanstack/react-query';
import { getProducts, getProductById } from './service';
import type { Product, ProductFilters } from './types';

export type { Product };

export const productKeys = {
  all: ['products'] as const,
  list: (filters: ProductFilters) =>
    [
      ...productKeys.all,
      'list',
      {
        ...filters,
        page: filters.page ?? 1,
        limit: filters.limit ?? 10,
        sort: filters.sort
          ? typeof filters.sort === 'string'
            ? filters.sort
            : JSON.stringify(filters.sort)
          : undefined
      }
    ] as const,
  detail: (id: number) => [...productKeys.all, 'detail', id] as const
};

export const productsQueryOptions = (filters: ProductFilters) =>
  queryOptions({
    queryKey: productKeys.list(filters),
    queryFn: () => getProducts(filters)
  });

export const productByIdOptions = (id: number) =>
  queryOptions({
    queryKey: productKeys.detail(id),
    queryFn: () => getProductById(id)
  });
