import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from "../services/cart.service";


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product = new Product();
  quantity: number = 1;
  constructor(private route: ActivatedRoute , private productService: ProductService, private cart: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.product = this.productService.getProductById(param['id']);
    });
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
    window.alert('Added to cart');
  }



}
