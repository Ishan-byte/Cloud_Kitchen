import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/Order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-MenuPages',
  templateUrl: './MenuPages.component.html',
  styleUrls: ['./MenuPages.component.css'],
})
export class MenuPagesComponent implements OnInit {
  menuId: number | null;
  menuData: any;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menuId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.menuId) {
      this.menuData = this.orderService.foodDetails.filter((value) => {
        return value.id == this.menuId;
      })[0];
    }
  }
}
