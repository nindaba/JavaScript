import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketServiceService {
  private basketItems: (Item&{count:number})[]=[];
  constructor() { 
  }
  remove(id: string) {
    this.basketItems.splice(this.basketItems.findIndex(item=> item.id===id),1)
  }
  add(item:Item){
    let index = this.basketItems.findIndex(findItem=> findItem.id===item.id);
    let update = this.basketItems[index];
    if(update){
      update.count++;
      this.basketItems[index] = update;
    }
    else this.basketItems.push({...item,count:1});
  }
  getItems():(Item&{count:number})[]{
    return this.basketItems;
  }
}
