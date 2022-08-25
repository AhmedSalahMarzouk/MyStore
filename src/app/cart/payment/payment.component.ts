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

  
 
  userdata: Userdata = new Userdata();
  order: Order = new Order();
  cartCount$: Observable<number> = new Observable<number>();

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.cartCount$ = this.cart.count;
  }

  onSubmit(): void { 

    this.order.products = this.cart.get();
    this.order.userdata = this.userdata;

    this.cart.saveOrder(this.order);
    this.router.navigateByUrl("/Confirm");
  }

  NameChanged(name : string){ 
    this.userdata.fullname = name;
  }

  AddressChanged(address : string){ 
    this.userdata.address = address;
  }

  CreditCardChanged(creditCard : string){ 
    this.userdata.creditCard = creditCard;
  }

}
