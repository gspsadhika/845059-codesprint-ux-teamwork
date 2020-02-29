import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { PlaceOrderService } from '../services/placeorder.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders : Order[]
  constructor(private orderService: PlaceOrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    })
  }

}
