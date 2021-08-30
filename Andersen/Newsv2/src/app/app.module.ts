import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field'

import { AppComponent } from './app.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule.withConfig,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
