import { Component, Input, OnInit } from '@angular/core';
import { Pet, Trainee } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';
import { pets } from 'src/app/services/scalData';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet:Pet = pets[0];
  trainee:Trainee = pets[0].trainee;
  constructor(private service:PetService) { }

  ngOnInit(): void {
    this.pet = pets[0];
  }

}
