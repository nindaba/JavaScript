import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm :FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private personService:PersonService,
    private router :Router,
    private activateRoute:ActivatedRoute) 
    {
    this.personForm = this.formBuilder.group({
      username:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      address:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.personForm.get('person')?.valueChanges.subscribe((name:string)=>{
      let personFound = this.personService.getPeopleByName(name);
      if(personFound) this.personForm.get('person')?.setErrors({person:true})
      else this.personForm.get('person')?.setErrors(null);
    });
  }
  cancel(){
    this.router.navigate([''])
  }
  addPerson(){
    this.personService.addPerson(this.personForm.value);
    this.personForm.reset();
  }
}
