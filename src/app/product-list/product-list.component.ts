import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadProducts();
    this.productService.getproducts().subscribe(res => {
      for (let index=0; index < res.length ; index++){
        const product=res[index];
        product.quantity=0;
      }
      this.products = res;
    });
  }

}
