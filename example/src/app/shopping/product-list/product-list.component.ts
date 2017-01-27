import { Product } from '../shared/models/product';
import { CategorySelection } from '../shared/models/product-category';
import { ProductListService } from '../shared/product/product-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sec-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {

  public categories: CategorySelection[];
  public products: Product[];
  public pageNumbers: number[];
  public currentPage: number;

  constructor(
    private productListService: ProductListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productListService.getProductList()
      .subscribe((productList) => {
        this.products = productList.getProducts();
        this.pageNumbers = productList.getPages();
        this.currentPage = productList.options.currentPage;
      });
    this.productListService.getProductCategorySelection()
      .subscribe((categories) => {
        {
          this.categories = categories;
        }
      });
  }

  public filterByCategory(category: CategorySelection, event): void {
    this.productListService.filterByCategory({
      categoryId: category.categoryId,
      selected: event.target.checked
    });
  }

}
