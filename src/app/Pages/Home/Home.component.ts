import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/Order.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
 
 
  //constructor for Home component
  // injecting a orderservice on constructing an instance of the component
  constructor(private order:OrderService) {}

  foodData = <any>[];

  ngOnInit() {
    this.foodData = this.order.foodDetails;
  }
}
