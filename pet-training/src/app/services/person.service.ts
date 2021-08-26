import { Injectable } from '@angular/core';
import { Person, Trainee } from './models';
import { people, trainees } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  getPeopleByName(name:string):Person[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return people
    .filter((person:Person) => nameRegex.test(person.username.toLowerCase()));
  }
  getTraineesByName(name:string):Trainee[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return trainees
    .filter((trainee:Trainee) => nameRegex.test(trainee.details.username.toLowerCase()));
  }

}
