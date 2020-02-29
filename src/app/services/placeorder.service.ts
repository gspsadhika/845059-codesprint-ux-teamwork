import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: "root"
})
export class PlaceOrderService {
  httpUrl = "http://localhost:3000/orders";
  constructor(private httpClient: HttpClient) {}
  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.httpUrl);
  }
  saveOrder(place: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.httpUrl, place);
  }
  deleteOrder(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(this.httpUrl + id);
  }
  updateOrder(place: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.httpUrl + place.id, place);
  }
  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(this.httpUrl + id);
  }
}
