import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/Order.service';

@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private order:OrderService) { }

  foodData = <any>[]

  ngOnInit() {
    this.foodData = this.order.foodDetails
  }

}
