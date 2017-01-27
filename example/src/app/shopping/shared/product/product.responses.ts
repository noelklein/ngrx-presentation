import { ProductState } from '../shopping.state';

export interface ProductsResponse {
  results: ProductState[];
  pageNumber: number;
  totalPages: number;
  totalRecords: number;
}
