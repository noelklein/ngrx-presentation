export const INITIAL_STATE: ShoppingState = {
  cart: {
    items: []
  },
  productList: {
    products: [],
    options: {
      currentPage: 1,
      pageSize: 9,
      totalPages: 0,
      sortColumn: 'name',
      selectedProductCategories: [],
    },
    productCategories: [],
  }
};

export interface ShoppingState {
  readonly cart: CartState;
  readonly productList: ProductListState;
}

export interface CartState {
  readonly items: CartItemState[];
}

export interface CartItemState {
  readonly qty: number;
  readonly product: ProductState;
  readonly totalAmount: number;
}

export interface ProductListState {
  readonly products: ProductState[];
  readonly options: ProductListOptionsState;
  readonly productCategories: ProductCategoryState[];
}

export interface ProductState {
  readonly productId: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly productCategoryId: number;
}

export interface ProductListOptionsState {
  readonly currentPage: number;
  readonly pageSize: number;
  readonly totalPages: number;
  readonly sortColumn: string;
  readonly selectedProductCategories: number[];
}

export interface ProductCategoryState {
  productCategoryId: number;
  name: string;
}
