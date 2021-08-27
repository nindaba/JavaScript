import { R3TargetBinder } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Trainer } from './models';
import { trainers } from './scalData';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainers:Trainer[];
  constructor() {
    this.trainers = trainers;
    
   }
  searchTrainersByName(name:string):Trainer[]{
    const nameRegex:RegExp = new RegExp(name.toLowerCase());
    return this.trainers
    .filter((trainer:Trainer) => nameRegex.test(trainer.details.username.toLowerCase()));
  }
  getTrainerByName(name:string){
    return this.trainers
    .filter((trainer:Trainer) => trainer.details.username.toLowerCase() === name.toLowerCase())[0];
  }
  addTrainer(formDetails:any){
    //intitialize new Trainer and add fake id which would be added by a Server
    let trainer : Trainer = {
      id : formDetails.username+ Math.random() *1000,
      details: formDetails,
      started : new Date(),
      trannings :0,
      rates :0
    }
    this.trainers.push(trainer);
  }
}
