import { Component, Input, OnInit } from '@angular/core';
import { Pet, Trainer } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet:Pet|any;
  trainer:Trainer|any;
  constructor(private service:PetService) { }

  ngOnInit(): void {
    // console.log(this.pet)

    // trainer property as it would be long in the template
    this.trainer = this.pet.trainer;
  }
  get process():number{
    return this.pet.completed.length*100/this.pet.subjects.length
  }
  
}
