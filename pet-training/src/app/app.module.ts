//Packages imports 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Material
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatListModule} from '@angular/material/list'
import {MatChipsModule} from '@angular/material/chips'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatDividerModule} from '@angular/material/divider'
// Generated Imports 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetformComponent } from './components/petform/petform.component';
import { PetService } from './services/pet.service';
import { PersonService } from './services/person.service';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { TrainerFormComponent } from './components/trainer-form/trainer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetCardComponent,
    DashboardComponent,
    PetformComponent,
    PersonFormComponent,
    TrainerFormComponent
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatChipsModule,
    FormsModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [PetService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
