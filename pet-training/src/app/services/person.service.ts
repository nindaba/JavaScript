import { Injectable } from '@angular/core';
import { Person, Trainer } from './models';
import { people, trainers } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people:Person[];
  trainers:Trainer[];
  constructor() { 
    this.people = people;
    this.trainers = trainers;
  }
  getPeopleByName(name:string):Person[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.people
    .filter((person:Person) => nameRegex.test(person.username.toLowerCase()));
  }
  getTrainersByName(name:string):Trainer[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.trainers
    .filter((trainer:Trainer) => nameRegex.test(trainer.details.username.toLowerCase()));
  }

  addPerson(person:Person){
    this.people.push(person);
  }
}
