import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  step: string;
  constructor() { 
    this.step ='';
  }

  ngOnInit(): void {
  }
  nextStatus(step: string){
    this.step = step;
    console.log(step);
  }
}
