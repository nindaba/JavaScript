import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryItem } from '../models/category-item.model';
import { Category } from '../models/category.model';
import { CATEGORY, CATEGORY_ITEM } from './api.urls.ts/item-service.url';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(private http : HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(CATEGORY);
  }
  getCategoryItems(id:string){
    return this.http.get<CategoryItem>(CATEGORY_ITEM(id));
  }
}
