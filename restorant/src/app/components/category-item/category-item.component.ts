import { Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryItem } from 'src/app/models/category-item.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit,OnDestroy {
  categories: Category[];
  subscription: Subscription;
  categoryItems: CategoryItem;
  constructor(
    private categoryService: CategoryServiceService,
    private activateedRoutes:ActivatedRoute,
    private router:Router) {
    this.categories = []
    this.categoryItems = {
      id: '',
      name: '',
      image: '',
      description: '',
      items: []
    };
    this.subscription = new Subscription();
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(this.activateedRoutes
    .params
    .subscribe( (params:Params) =>{
      let categoryId = params.categoryId;
      //this is clean since it happens once

      // Subscribe to all categories
      this.subscription.add(categoryId ? this.categoryService
      .getCategoryItems(categoryId)
      .subscribe(categoryItem=>this.categoryItems = categoryItem)
      // Subscribe to category Item
      : this.categoryService
      .getCategories()
      .subscribe(categories=> this.categories = categories) 
      )
    }));
    this.subscription.add();
  }
  
}
