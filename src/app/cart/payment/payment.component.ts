import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from "../../services/cart.service";
import { Observable } from 'rxjs';
import { Userdata } from "../../models/Userdata";
import { Order } from "../../models/Order";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  name: string = "";
  address: string = "";
  creditCard: string = "";
 
 
  userdata: Userdata = new Userdata();
  order: Order = new Order();
  cartCount$: Observable<number> = new Observable<number>();

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.cartCount$ = this.cart.count;
  }

  onSubmit(): void {
    this.userdata.fullname = this.name;
    this.userdata.address = this.address;
    this.userdata.creditCard = this.creditCard;

    this.order.products = this.cart.get();
    this.order.userdata = this.userdata;

    this.cart.saveOrder(this.order);
    this.router.navigateByUrl("/Confirm");
  }

}
