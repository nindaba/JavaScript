import { Injectable } from '@angular/core';
import { Person, Trainee } from './models';
import { people, trainees } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people:Person[];
  trainees:Trainee[];
  constructor() { 
    this.people = people;
    this.trainees = trainees;
  }
  getPeopleByName(name:string):Person[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.people
    .filter((person:Person) => nameRegex.test(person.username.toLowerCase()));
  }
  getTraineesByName(name:string):Trainee[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.trainees
    .filter((trainee:Trainee) => nameRegex.test(trainee.details.username.toLowerCase()));
  }

  addPerson(person:Person){
    this.people.push(person);
  }
}
