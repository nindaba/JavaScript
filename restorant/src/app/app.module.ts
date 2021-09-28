import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { CategoryServiceService } from './services/category-service.service';
import { ItemServiceService } from './services/item-service.service';

import { MatModule } from './mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForCategoriesItemsDirective } from './directives/for-categories-items.directive';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { BasketComponent } from './components/basket/basket.component';
import { BasketItemComponent } from './components/basket-item/basket-item.component';
import { BasketServiceService } from './services/basket-service.service';
@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    DashboardComponent,
    CategoryItemComponent,
    ForCategoriesItemsDirective,
    ItemCardComponent,
    BasketComponent,
    BasketItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    FlexLayoutModule
  ],
  providers: [CategoryServiceService,ItemServiceService,BasketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
