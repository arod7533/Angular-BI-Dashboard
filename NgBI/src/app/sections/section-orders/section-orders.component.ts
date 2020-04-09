import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer:
      {id: 1, name: 'Tony Rod', state: 'OR', email: 'example@example.com'},
      total: 150, placed: new Date(2020, 1, 1), fulfilled: new Date(2020, 1, 2), status: 'Complete'},
    {id: 2, customer:
      {id: 2, name: 'Anibel San', state: 'CO', email: 'example@example.com'},
      total: 250, placed: new Date(2020, 2, 1), fulfilled: new Date(2020, 2, 2), status: 'Pending'},
    {id: 3, customer:
      {id: 3, name: 'John Smithonsen', state: 'PA', email: 'example@example.com'},
      total: 350, placed: new Date(2020, 3, 1), fulfilled: new Date(2020, 3, 2), status: 'Shipped'},
    {id: 4, customer:
      {id: 5, name: 'Anthony Francisco', state: 'CA', email: 'example@example.com'},
      total: 450, placed: new Date(2020, 4, 1), fulfilled: new Date(2020, 4, 2), status: 'Complete'},
    {id: 5, customer:
      {id: 5, name: 'Mig Shooter', state: 'FL', email: 'example@example.com'},
      total: 550, placed: new Date(2020, 5, 1), fulfilled: new Date(2020, 5, 2), status: 'Pending'}
  ];

  ngOnInit(): void {
  }

}
