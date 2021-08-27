import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {
  @ViewChild('personForm') personForm : PersonFormComponent|any;
  constructor(private router:Router,private tarinerService : TrainerService) { }

  ngOnInit(): void {
  }
  get invalid():boolean{
    if(this.personForm) return this.personForm?.personForm.invalid;
    return true;
  }
  reset(){
    this.personForm.personForm.reset();
  }
  cancel(){
    this.router.navigate(['']);
  }
  addTrainer(){
    // console.log( this.personForm.personForm.value)
    this.tarinerService.addTrainer(this.personForm.personForm.value)
    this.personForm.personForm.reset();
    this.router.navigate(['']);
  }
}
