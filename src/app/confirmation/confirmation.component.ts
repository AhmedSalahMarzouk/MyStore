import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { Order } from "../models/Order";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: Order = new Order();;
  total: number = 0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.order = this.cart.getOrder();
    this.total = this.cart.getTotalFromOrder(this.order);
  }

}
