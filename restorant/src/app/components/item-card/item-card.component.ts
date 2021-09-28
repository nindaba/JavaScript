import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { BasketServiceService } from 'src/app/services/basket-service.service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input('item') item:Item;
  constructor(private router:Router,private basketService:BasketServiceService) {
    this.item = {
      id: '',
      name: '',
      images: [],
      description: '',
      category:'',
      price: 0
    }
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.basketService.add(this.item);
  }
}
