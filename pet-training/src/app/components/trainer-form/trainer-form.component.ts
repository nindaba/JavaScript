import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {
  @ViewChild('personForm') personForm : PersonFormComponent|any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get invalid():boolean{
    return true;
  }
  reset(){
    this.personForm.personForm.reset();
  }
  cancel(){
    this.router.navigate(['']);
  }
  addTrainer(){
    console.log( this.personForm.personForm.value)
  }
}
