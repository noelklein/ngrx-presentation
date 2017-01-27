export interface ProductCategory {
  productCategoryId: number;
  name: string;
}

export interface CategoryFilter {
  categoryId: number;
  selected: boolean;
}

export interface CategorySelection extends CategoryFilter {
  name: string;
}
