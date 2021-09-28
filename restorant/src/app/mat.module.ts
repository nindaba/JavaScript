import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge'
import { ScrollingModule } from '@angular/cdk/scrolling'

@NgModule({
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatBadgeModule,
        ScrollingModule
    ]
  })
  export class MatModule { }