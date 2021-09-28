import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BasketServiceService } from 'src/app/services/basket-service.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items : (Item&{count:number})[] = [];
  constructor(private baketService:BasketServiceService) { }

  ngOnInit(): void {
    this.items = this.baketService.getItems();
  }
  get total():number{
    return this.items
    .map(item=>item.price * item.count)
    .reduce((tot,acc)=> tot+acc,0);
  }

}
