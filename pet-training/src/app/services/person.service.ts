import { Injectable } from '@angular/core';
import { Person, Trainer } from './models';
import { people, trainers } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  people:Person[];
  
  constructor() { 
    this.people = people;

  }
  searchPeopleByName(name:string):Person[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.people
    .filter((person:Person) => nameRegex.test(person.username.toLowerCase()));
  }
  getPersonByName(name:string){
    return this.people
    .filter((person:Person) => person.username.toLowerCase() === name.toLowerCase())[0];
  }

  addPerson(person:Person){
    this.people.push(person);
  }
}
