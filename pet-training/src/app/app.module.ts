//Packages imports 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
// Generated Imports 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetformComponent } from './components/petform/petform.component';

@NgModule({
  declarations: [
    AppComponent,
    PetCardComponent,
    DashboardComponent,
    PetformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
