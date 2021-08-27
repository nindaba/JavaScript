import { Component, Input, OnInit } from '@angular/core';
import { Pet, Trainee } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet:Pet|any;
  trainee:Trainee|any;
  constructor(private service:PetService) { }

  ngOnInit(): void {
    console.log(this.pet)

    // trainee property as it would be long in the template
    this.trainee = this.pet.trainee;
  }
  get process():number{
    return this.pet.completed.length*100/this.pet.subjects.length
  }
  
}
