import { Component, OnInit, Input ,  Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/Product";
import { CartService } from "../../services/cart.service";
import { CartComponent } from "../cart.component";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter();

  constructor(private cart: CartService, private cartComponent: CartComponent) { }

  ngOnInit(): void {
  }

  removeFromCart(product : Product): void {
    this.removeItemFromCart.emit(this.product);
    this.cart.remove(this.product);
    this.cart.getTotal();
    this.product.quantity = 0;
    this.cart.total.next(this.cart.getTotal());
    this.cart.count.next(this.cart.getCount());
     
  }

  checkNumbers(e: Event): void {
    const input = ( e.target as HTMLInputElement)
    const value= parseInt(input.value);
    
    if (value && Math.abs(value) > 0) {
      input.value = Math.abs(value).toString();
    } else {
      input.value = "0";
      this.removeItemFromCart.emit(this.product);
    this.cart.remove(this.product);
    this.cart.getTotal();
    }

    this.product.quantity = parseInt(input.value);
    this.cart.total.next(this.cart.getTotal());
    this.cart.count.next(this.cart.getCount());
  }

}
