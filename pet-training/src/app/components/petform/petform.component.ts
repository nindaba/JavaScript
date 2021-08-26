import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person, Trainee } from 'src/app/services/models';
import { PersonService } from 'src/app/services/person.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent implements OnInit {
  subjectsChips:string[]=[];
  trainees:Trainee[] = []
  owners:Person[] = [];
  petForm :FormGroup;
  image:string='https://www.google.com/search/static/gs/animal/cover_images/m0bt9lr_cover.png';
  trainee:Trainee|undefined;
  private _traineeSearch:string ='';
  set traineeSearch(@Input('traineeSearch') search){
    this._traineeSearch = search;
  }
  get traineeSearch():string{
    return this._traineeSearch;
  }
  constructor(private petService:PetService,private personService:PersonService,private formBuilder : FormBuilder) {
    this.petForm = this.formBuilder.group({
    name:['',Validators.required],
    age:['',Validators.required],
    owner:['',Validators.required],
    trainee:['',Validators.required],
    breed:['',Validators.required],
    subjects:['',Validators.required],
    image :[this.image]
    })
  }

  
  ngOnInit(): void {
    // as the user types we check if the username is looking for is available
    // if not available we set the form to ivalid 

    this.petForm.get('owner')?.valueChanges.subscribe((name:string)=>{
      this.owners = this.personService.getPeopleByName(name);
      if(this.owners) this.petForm.get('owner')?.setErrors(null);
      else this.petForm.get('owner')?.setErrors({nowners:true})
    });
    this.petForm.get('trainee')?.valueChanges.subscribe((name:string)=>{
      this.trainees = this.personService.getTraineesByName(name);
      if(this.trainees) this.petForm.get('trainee')?.setErrors(null);
      else this.petForm.get('trainee')?.setErrors({notrainee:true})
      console.log(this.petForm.get('trainee')?.getError('notrainee'))
    })
    //add a chip as a subject is added 
    this.petForm.get('subjects')?.valueChanges.subscribe((subject:string)=>{
      if(subject.endsWith(',')) {
        this.subjectsChips.push(subject.substring(0,subject.length-1));
        this.petForm.get('subjects')?.setValue ('');
        // then we clear validators because we nolonger need them 
        this.petForm.get('subjects')?.clearValidators();
        this.petForm.get('subjects')?.clearAsyncValidators();
      }
    })
  }
  fileChanged(event:any){
    let reader:FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (imageEvent:any)=>{
      this.image = imageEvent.target.result;
      console.log(this.image)
    }
  }
  addPet(){
    this.petService.addPet(this.petForm.value,this.subjectsChips);

    //submitted
    // console.log(this.petService.getAllPets())

    // clean Values;
    this.petForm = this.formBuilder.group({
      name:['',Validators.required],
      age:['',Validators.required],
      owner:['',Validators.required],
      trainee:['',Validators.required],
      breed:['',Validators.required],
      subjects:['',Validators.required],
      })
  }
}
