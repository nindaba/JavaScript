import { Injectable } from '@angular/core';
import { Pet } from './models';
import { PersonService } from './person.service';
import { pets } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets:Pet[] =[];
  constructor(private personService:PersonService) {
    // Innitialize Pets "(*_*) dummy HttpClient"
    this.pets = pets;
  }
  getAllPets():Pet[]{
    //get all pets
    return this.pets;
  }
  getPetById(id:string):Pet{
    // find a pet with the given id
    return this.pets.filter((pet:Pet) => pet.id === id)[0];
  }
  //this function will search in the name of the pet , breed , owner and trainer
  petMatches(pet:Pet,regex:string):boolean{
    const search: RegExp = new RegExp(regex.toLowerCase());
    return(
      search.test(pet.name.toLowerCase()) || 
      search.test(pet.owner.username.toLowerCase()) ||
      search.test(pet.trainer.details.username.toLowerCase()) ||
      search.test(pet.breed.toLowerCase())
    )
  }
  addPet(pet:any,subjects:string[]){
    //Replace the Owner name with owner object
    pet.owner = this.personService.getPeopleByName(pet.owner)[0];
    
    //Replace th Yrainer name with Trainer Object
    pet.trainer = this.personService.getTrainersByName(pet.trainer)[0];

    pet.subjects = subjects||[]; 

    //initial completed is 0
    pet.completed = [];

    // initialy it start training the day registered
    pet.started = new Date();

    // add Id but it would be added by server, UUId would be better but it comes with extracost of package
  
    pet.id = pet.name+Math.random()*10000

    //make a post call
    this.pets.push(pet);
  }
}
