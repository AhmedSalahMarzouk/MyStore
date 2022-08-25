import { Component, OnInit, Input  } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from "../services/cart.service";
import { ProductService } from "../services/product.service"; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  quantity: number = 1;
  @Input() product: Product = new Product();

  constructor(private cart: CartService,  private products: ProductService) { 
  
  }

  ngOnInit(): void {
  }

  
  

  onSubmit(): void {
    // Your submit logic here (e.g., making an API call that sends form data)
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  addToCartitem(): void {
    this.cart.add(this.product, this.quantity);
    window.alert('Added to cart');
   
  }

  deleteProduct(): void {
    this.products.deleteProduct(this.product);
    
  }

}
