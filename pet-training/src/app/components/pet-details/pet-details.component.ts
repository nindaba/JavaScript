import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pet } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet:Pet|undefined;
  newSubject:string = '';
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private petService:PetService,
    private formBuilder:FormBuilder,
    private change :ChangeDetectorRef) {
     }
  ngOnInit(): void {
    let pet:Pet|undefined;
    this.route.params.subscribe((params:Params)=>{
      if(params.petId) {
        pet = this.petService.getPetById(params.petId);
        if(!pet) this.router.navigate(['','notfoud']);
        this.pet = pet;
      }
    });
  }
  saveChanges(){
    // console.log(this.pet?.subjects)
    if(this.pet) this.petService.updatePet(this.pet);
  }
  addSubject(){
    if(this.newSubject) this.pet?.subjects.push({name:this.newSubject,isCompleted:false});
    //clear the input
    this.newSubject = '';
  }
  removeSubject(subject:{name:string,isCompleted:boolean}){
    let index = this.pet?.subjects.findIndex(subj=> subj===subject);
    if(index && index > -1) this.pet?.subjects.splice(index,1);
    
  }
}
