import { Product } from './product';
import { CategoryFilter, ProductCategory } from './product-category';
import { ProductListOptionsState, ProductListState } from '../shopping.state';

export type SortColumn = 'name' | 'productId' | 'description' | 'price';

export class ProductListOptions {
  public currentPage: number;
  public pageSize: number;
  public totalPages: number;
  public sortColumn: SortColumn;
  public selectedProductCategories: number[];
  constructor(productListOptionsState: ProductListOptionsState) {
    this.currentPage = productListOptionsState.currentPage;
    this.pageSize = productListOptionsState.pageSize;
    this.totalPages = productListOptionsState.totalPages;
    this.selectedProductCategories = productListOptionsState.selectedProductCategories;
    this.sortColumn = productListOptionsState.sortColumn as SortColumn;
  }
  public setCategoryFilter(categoryFilter: CategoryFilter) {
    const categoriesWithoutCurrentFilter = this.selectedProductCategories.filter((categoryId) => categoryId !== categoryFilter.categoryId);
    if (categoryFilter.selected) {
        categoriesWithoutCurrentFilter.push(categoryFilter.categoryId);
    }
    this.selectedProductCategories = categoriesWithoutCurrentFilter;
  }
}

export class ProductList implements ProductListState {
  public products: Product[];
  public productCategories: ProductCategory[];
  public options: ProductListOptions;

  constructor(productListState: ProductListState) {
    this.products = productListState.products.map((product) => new Product(product));
    this.options = new ProductListOptions(productListState.options);
    this.productCategories = productListState.productCategories;
  }

  public setProducts(products: Product[]) {
    this.products = products;
  }
  public setProductCategories(categories: ProductCategory[]) {
    this.productCategories = categories;
  }
  public add(product: Product) {
    if (!this.containsProductWithId(product.productId)) {
      this.products.push(product);
    }
  }
  public containsProductWithId(productId: number) {
    return this.products.some((p) => p.productId === productId);
  }
  public getProductById(id: number) {
    return this.products.find((p) => p.productId === id);
  }
  public getProducts() {
    return this.products;
  }
  public isEmpty() {
    return this.options.totalPages === 0;
  }
  public getPages() {
    return Array.from(Array(this.options.totalPages).keys()).map((pageIndexStartingWithZero) => pageIndexStartingWithZero += 1);
  }
}
