import { Injectable } from '@angular/core';
import { Pet } from './models';
import { pets } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }
  getAllPets():Pet[]{
    //get all pets
    return pets;
  }
  getPetById(id:string):Pet{
    // find a pet with the given id
    return pets.filter((pet:Pet) => pet.id === id)[0];
  }
  //this function will search the name of the pet and breed , owner and trainee
  petMatches(pet:Pet,regex:string):boolean{
    const search: RegExp = new RegExp(regex.toLowerCase());
    console.log(search+" "+pet.name+" "+search.test(pet.name))
    return(
      search.test(pet.name.toLowerCase()) || 
      search.test(pet.owner.fullName.toLowerCase()) ||
      search.test(pet.trainee.details.fullName.toLowerCase()) ||
      search.test(pet.breed.toLowerCase())
    )
  }
}
