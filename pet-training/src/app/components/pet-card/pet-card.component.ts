import { Component, OnInit } from '@angular/core';
import { Pet, Trainee } from 'src/app/services/models';
import { pets } from 'src/app/services/scalData';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  pet:Pet = pets[0];
  trainee:Trainee = pets[0].trainee[0];
  constructor() { }

  ngOnInit(): void {
    this.pet = pets[0];
  }

}
