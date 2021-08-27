import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.css']
})
export class TraineeFormComponent implements OnInit {
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
  addTrainne(){
    console.log( this.personForm.personForm.value)
  }
}
